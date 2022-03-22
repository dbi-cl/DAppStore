import type { NextApiRequest, NextApiResponse } from "next";
import type { DAppId } from "../../../model/DApp";
import type { Result } from "../../../model/Result";

import { addDApp, validateDAppMeta } from "../../../model/DAppStore";
import { isNothing } from "../../../model/Maybe";
import { err, ok } from "../../../model/Result";

export type NewDAppResult = { id: DAppId };
export type NewDAppError = "UnsupportedMethod" | "InvalidMetaData";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result<NewDAppResult, NewDAppError>>
) {
  if (req.method !== "POST") {
    return res.status(400).json(err<NewDAppError>("UnsupportedMethod"));
  }
  try {
    const mDApp = validateDAppMeta(req.body);
    if (isNothing(mDApp)) {
      return res.status(400).json(err<NewDAppError>("InvalidMetaData"));
    }
    return res
      .status(200)
      .json(ok<NewDAppResult>({ id: addDApp(mDApp.value) }));
  } catch (e) {
    return res.status(400).json(err<NewDAppError>("InvalidMetaData"));
  }
}
