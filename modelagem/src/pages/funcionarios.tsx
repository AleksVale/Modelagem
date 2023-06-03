import SelectInput from '@/components/SelectInput'
import SimpleInputSearch from '@/components/SimpleInputSerach'
import TableRowFuncionario from '@/components/TableRowFuncionario'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { BsPencil } from 'react-icons/bs'

export interface Funcionario {
  id: number
  name: string
  user_name: string
  cargo: string
}

export default function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>()
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/funcionarios',
        )
        console.log(response)
        setFuncionarios(response.data.user)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])
  return (
    <div>
      <h1 className="text-black text-5xl pt-10">Funcionários</h1>
      <div className=" flex flex-col justify-between pt-10 w-full">
        <div className=" w-full">
          <div className="flex items-center justify-between pb-6">
            <div className="items-center justify-items-start">
              <SimpleInputSearch
                label="Busca Rápida"
                nameInput="busca-pedido"
                placeholder="Busca Rápida"
                value={search}
                onChangeValue={() => {
                  console.log('entrou')
                }}
              />
            </div>
            <div className="item-center justify-items-end">
              <SelectInput />
            </div>
          </div>
          <div className="flex text-black text-sm justify-between pb-4">
            <p>Total de itens: 5</p>
            <Link href="/cadastro-funcionario" className="flex flex-col">
              <button className="bg-red-300 text-black w-52 rounded-lg p-2">
                Cadastrar novo funcionário
              </button>
            </Link>
          </div>
          <div className="max-h-[550px] overflow-y-auto w-full">
            <table className="text-xs table-auto w-full h-full border-collapse text-black bg-gray-300 ">
              <thead>
                <tr className="text-center text-lg text-gray-400">
                  <th className="p-4">Cargo</th>
                  <th className="p-4">Nome de usuário</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Ação</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {funcionarios &&
                  funcionarios.map((item) => (
                    <TableRowFuncionario
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      user_name={item.user_name}
                      cargo={item.cargo}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex justify-end w-full mt-12"></div>
      </div>
    </div>
  )
}
