// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const knex = require('knex')
const knexConfig = require('../../../knexfile')

const knexInstance = knex(knexConfig.development)

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const { nomeCompleto, nomeUsuario, senha, cargo } = req.body

  knexInstance('users')
    .insert({
      name: nomeCompleto,
      user_name: nomeUsuario,
      password: senha,
      cargo_id: cargo,
    })
    .then(() => {
      return res.status(200).json({ message: 'Dados salvos com sucesso' })
    })
    .catch((error: any) => {
      console.error(error)
      return res.status(500).json({ message: 'Erro ao salvar os dados' })
    })
}
