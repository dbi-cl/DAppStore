import type { DApp, DAppBrief, DAppId, DAppList } from "./DApp";
import type { Maybe } from "./Maybe";

import { v4 } from "uuid";
import { just, nothing, zip } from "./Maybe";
import { stubDApps } from "./DAppStub";

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
const isNumber = (n: any): n is number => typeof n === "number";
const validateNumber = validate(isNumber);

export const validateDApp = (obj: any): Maybe<DApp> =>
  zip({
    name: validateNonEmptyString(obj.name),
    landingURL: validateNonEmptyString(obj.landingURL),
    iconURL: validateNonEmptyString(obj.iconURL),
    snapshortURLs: validateStringArray(obj.snapshortURLs),
    briefing: validateNonEmptyString(obj.briefing),
    description: validateString(obj.description),
    authorName: validateNonEmptyString(obj.authorName),
    authorEmail: validateNonEmptyString(obj.authorEmail),
    modifiedBy: validateNumber(obj.modifiedBy),
    createdBy: validateNumber(obj.createdBy),
  });

const dapps: Record<string, DApp> = {};

export const addDApp = (dapp: DApp): string => {
  const id = v4();
  dapps[id] = dapp;
  return id;
};

export const getDApp = (id: string): Maybe<DApp> => {
  return dapps[id] ? just(dapps[id]) : nothing;
};

export const getDAppList = (): DAppList => {
  return Object.entries(dapps)
    .sort(([_A, dappA], [_B, dappB]) => dappB.modifiedBy - dappA.modifiedBy)
    .map(([id, { name, landingURL, iconURL, briefing }]) => ({
      id,
      name,
      landingURL,
      iconURL,
      briefing,
    }));
};

// Load the stub
stubDApps.forEach(addDApp);
