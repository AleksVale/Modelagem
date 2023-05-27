import { Pedido } from '@/Interfaces/API'
import React from 'react'

interface TableRowPedidoProps {
  product: Pedido // Assuming you have a Product interface or type defined
}

const TableRowPedido: React.FC<TableRowPedidoProps> = ({ product }) => {
  const utcDate = product.data_compra // Assuming the value is a valid UTC date string
  const dateObj = new Date(utcDate)
  const formattedDate = dateObj.toLocaleDateString('pt-BR')
  return (
    <tr key={product.id} className="text-center text-base">
      <td className="p-4 text-center">{product.nome}</td>
      <td className="p-4 text-center">{product.quantidade_total}</td>
      <td className="p-4 text-center">{formattedDate}</td>
      <td className="p-4 text-center">{product.fornecedor}</td>
    </tr>
  )
}

export default TableRowPedido
