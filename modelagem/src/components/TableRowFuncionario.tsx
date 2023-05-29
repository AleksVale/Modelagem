import { Funcionario } from '@/Interfaces/API'
import React from 'react'

interface TableRowFuncionarioProps {
  funcionario: Funcionario // Assuming you have a Product interface or type defined
}

const TableRowFuncionario: React.FC<TableRowFuncionarioProps> = ({
  funcionario,
}) => {
  return (
    <tr key={funcionario.id} className="text-center text-base">
      <td className="p-4 text-center">{funcionario.nome}</td>
      <td className="p-4 text-center">{funcionario.cargo}</td>
      <td className="p-4 text-center">{funcionario.status}</td>
      <td className="p-4 text-center">{funcionario.acao}</td>
    </tr>
  )
}

export default TableRowFuncionario
