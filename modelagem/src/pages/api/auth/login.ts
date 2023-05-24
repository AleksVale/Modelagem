// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import LoginController from '@/Controllers/LoginController'
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { username, password } = req.body

  const user = await LoginController({ username, password })

  return res.status(200).json(user)
}
