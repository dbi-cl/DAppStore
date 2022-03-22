import type { NextApiRequest, NextApiResponse } from "next";
import type { DAppList } from "../../model/DApp";
import type { Result } from "../../model/Result";

import { getDAppList } from "../../model/DAppStore";
import { ok, err } from "../../model/Result";

export type DAppListResult = DAppList;
export type DAppListError = "UnsupportedMethod";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Result<DAppListResult, DAppListError>>
) {
  if (req.method !== "GET") {
    return res.status(400).json(err<DAppListError>("UnsupportedMethod"));
  }
  const dapps = await getDAppList();
  return res.status(200).json(ok<DAppListResult>(dapps));
}
