import type { NextApiRequest, NextApiResponse } from 'next'
const knex = require('knex')
const knexConfig = require('../../../knexfile')

const knexInstance = knex(knexConfig.development)

type Data = {
  user?: any
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    handleGetRequest(req, res)
  } else if (req.method === 'POST') {
    handlePostRequest(req, res)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

async function handleGetRequest(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const user = await knexInstance('users')
      .join('cargos', 'users.cargo_id', '=', 'cargos.id')
      .select('users.id', 'users.name', 'users.user_name', 'cargos.name')
    res.status(200).json({ user, message: 'success' })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}

function handlePostRequest(req: NextApiRequest, res: NextApiResponse<Data>) {
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
  res.status(200).json({ message: 'POST request handled' })
}
