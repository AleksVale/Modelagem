import type { NextApiRequest, NextApiResponse } from 'next'
const knex = require('knex')
const knexConfig = require('../../../knexfile')

const knexInstance = knex(knexConfig.development)

type Data = {
  pedidoProdutos?: any
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'GET') {
    handleGetRequest(req, res)
  } else {
    res.status(405).json({ message: 'Method Not Allowed' })
  }
}

async function handleGetRequest(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const pedidoProdutos = await knexInstance('pedidos')
      .leftJoin(
        'pedidos_produtos',
        'pedidos.id',
        '=',
        'pedidos_produtos.pedido_id',
      )
      .join('products', 'pedidos_produtos.produto_id', '=', 'products.id')
      .select(
        'pedidos.nome',
        'pedidos.data_compra',
        'pedidos.fornecedor',
        knexInstance.raw(
          'COALESCE(SUM(pedidos_produtos.quantidade), 0) as quantidade_total',
        ),
      )
      .groupBy('pedidos.nome', 'pedidos.data_compra', 'pedidos.fornecedor')
    res.status(200).json({ pedidoProdutos, message: 'success' })
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}
