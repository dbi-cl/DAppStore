import type { NextApiRequest, NextApiResponse } from "next";
import type { DApp } from "../../../model/DApp";
import type { Result } from "../../../model/Result";

import { getDApp } from "../../../model/DAppStore";
import { isNothing } from "../../../model/Maybe";
import { ok, err } from "../../../model/Result";

export type DAppDetailResult = DApp;
export type DAppDetailError = "UnsupportedMethod" | "DAppNotFound";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result<DAppDetailResult, DAppDetailError>>
) {
  if (req.method !== "GET") {
    return res.status(400).json(err<DAppDetailError>("UnsupportedMethod"));
  }
  const mDApp = await getDApp(req.query.dappId as string);
  if (isNothing(mDApp)) {
    return res.status(404).json(err<DAppDetailError>("DAppNotFound"));
  }
  return res.status(200).json(ok<DAppDetailResult>(mDApp.value));
}
