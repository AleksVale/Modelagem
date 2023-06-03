import { NextApiRequest, NextApiResponse } from 'next'
import knex from 'knex'
import knexConfig from '../../../knexfile'

const knexInstance = knex(knexConfig.development)

interface Produto {
  idProduto: number
  lote: string
  quantidade: number
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { nomePedido, fornecedor, produtos } = req.body

  const data = new Date()

  knexInstance
    .transaction((trx: any) => {
      return trx('pedidos')
        .insert({
          nome: nomePedido,
          data_compra: data,
          fornecedor,
        })
        .then((ids: number[]) => {
          const idPedido = ids[0] // Assuming the ID column is auto-incremented

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
