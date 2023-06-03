import { Funcionario } from '@/pages/funcionarios'
import React from 'react'
import { AiFillEye } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'

const TableRowFuncionario: React.FC<Funcionario> = ({
  id,
  name,
  user_name,
  cargo,
}) => {
  return (
    <tr key={id} className="text-center text-base">
      <td className="p-4 text-center">{name}</td>
      <td className="p-4 text-center">{user_name}</td>
      <td className="p-4 text-center">
        <AiFillEye />
      </td>
      <td className="p-4 text-center">
        <BsPencil />
      </td>
    </tr>
  )
}

export default TableRowFuncionario
