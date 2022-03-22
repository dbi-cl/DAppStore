import type { DApp, DAppList, DAppMeta } from "./DApp";
import type { Maybe } from "./Maybe";

import { MongoClient, ObjectId } from "mongodb";
import { just, nothing, zip } from "./Maybe";

const DB_USR = process.env.MONGODB_USR as string;
const DB_PWD = process.env.MONGODB_PWD as string;
const DB_URI = process.env.MONGODB_URI as string;
const uri = `mongodb+srv://${DB_USR}:${DB_PWD}@${DB_URI}`;
const p$colDApps = new MongoClient(uri, {})
  .connect()
  .then((cl) => cl.db())
  .then((db) => db.collection<DApp>("DApps"));

const validate =
  <T>(validator: (value: any) => value is T) =>
  (value: any): Maybe<T> =>
    validator(value) ? just(value as T) : nothing;

const isString = (s: any): s is string => typeof s === "string";
const validateString = validate(isString);
const isNonEmptyString = (s: any): s is string => isString(s) && s.length > 0;
const validateNonEmptyString = validate(isNonEmptyString);
const isArrayOf =
  <T>(v: (t: T) => t is T) =>
  (s: any): s is T[] =>
    Array.isArray(s) && s.every(v);
const validateStringArray = validate(isArrayOf(isNonEmptyString));
// const isNumber = (n: any): n is number => typeof n === "number";
// const validateNumber = validate(isNumber);

export const validateDAppMeta = (obj: any): Maybe<DAppMeta> =>
  zip({
    name: validateNonEmptyString(obj.name),
    landingURL: validateNonEmptyString(obj.landingURL),
    iconURL: validateNonEmptyString(obj.iconURL),
    snapshotURLs: validateStringArray(obj.snapshotURLs),
    briefing: validateNonEmptyString(obj.briefing),
    description: validateString(obj.description),
    authorName: validateNonEmptyString(obj.authorName),
    authorEmail: validateNonEmptyString(obj.authorEmail),
  });

export const addDApp = async (dapp: DAppMeta): Promise<string> => {
  const colDapps = await p$colDApps;
  const now = Date.now();
  const result = await colDapps.insertOne({
    ...dapp,
    createdBy: now,
    modifiedBy: now,
  });
  return result.insertedId.toString();
};

export const getDApp = async (id: string): Promise<Maybe<DApp>> => {
  const colDapps = await p$colDApps;
  const dapp = await colDapps.findOne(
    { _id: new ObjectId(id) },
    { projection: { _id: 0 } }
  );
  return dapp ? just(dapp) : nothing;
};

export const getDAppList = async (): Promise<DAppList> => {
  const colDapps = await p$colDApps;
  const dapps = await colDapps
    .find(
      {},
      { projection: { name: 1, landingURL: 1, iconURL: 1, briefing: 1 } }
    )
    .toArray();
  return dapps.map(({ name, landingURL, iconURL, briefing, _id }) => ({
    id: _id.toString(),
    name,
    landingURL,
    iconURL,
    briefing,
  }));
};
