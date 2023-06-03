export interface Pedido {
  id: number
  nome: string
  quantidade_total: number
  fornecedor: string
  data_compra: string
}

export interface Product {
  id: number
  name: string
  quantidade: number
  lote: string
  qtdMinima: number
}

export interface IResponseGetPedido {
  data: { pedidoProdutos: Pedido[]; message: string }
}
