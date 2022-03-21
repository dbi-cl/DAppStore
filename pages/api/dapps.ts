import type { NextApiRequest, NextApiResponse } from 'next'
import { DApp } from '../../model/DApp'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DApp[]>
) {
  res.status(200).json([])
}
