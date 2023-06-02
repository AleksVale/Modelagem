import { NextApiRequest, NextApiResponse } from 'next'
const knex = require('knex')
const knexConfig = require('../../../knexfile')

const knexInstance = knex(knexConfig.development)

interface Produto {
  idProduto: number
  lote: string
  quantidade: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { idPedido, nomePedido, dataCompra, fornecedor, produtos } = req.body

  knexInstance
    .transaction((trx: any) => {
      return trx('pedidos')
        .insert({
          id: idPedido,
          nome: nomePedido,
          data_compra: dataCompra,
          fornecedor,
        })
        .then(() => {
          const pedidosProdutos = produtos.map((produto: Produto) => ({
            produto_id: produto.idProduto,
            pedido_id: idPedido,
            lote: produto.lote,
            quantidade: produto.quantidade,
          }))

          return trx('pedidos_produtos').insert(pedidosProdutos)
        })
    })
    .then(() => {
      res.status(200).json({ message: 'Dados salvos com sucesso' })
    })
    .catch((error: any) => {
      console.error(error)
      res.status(500).json({ message: 'Erro ao salvar os dados' })
    })
}
