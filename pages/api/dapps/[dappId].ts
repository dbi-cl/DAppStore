import type { NextApiRequest, NextApiResponse } from "next";
import { DApp } from "../../../model/DApp";
import { Maybe, nothing } from "../../../model/Maybe";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Maybe<DApp>>
) {
  res.status(200).json(nothing);
}
