import { IResponseGetPedido, Pedido } from '@/Interfaces/API'
import SelectInput from '@/components/SelectInput'
import SimpleInputSearch from '@/components/SimpleInputSerach'
import TableRowPedido from '@/components/TableRowPedido'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function HistoricoPedidos() {
  const [pedidos, setPedidos] = useState<any>([])
  useEffect(() => {
    // Make API call here to retrieve the data
    // Replace `apiEndpoint` with the actual API endpoint
    axios
      .get('http://localhost:3000/api/historico-pedidos')
      .then((response) => {
        const data = response.data.pedidoProdutos as IResponseGetPedido // Explicitly cast response data as Product[]
        setPedidos(data)
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: `Erro: ${error}`,
          icon: 'error',
          confirmButtonText: 'Confirmar',
        })
      })
  }, [])

  return (
    <div>
      <h1 className="text-black text-5xl pt-10">Histórico Pedidos</h1>
      <div className=" flex flex-col justify-between pt-10 w-full">
        <div className=" w-full">
          <div className="flex items-center justify-between pb-6">
            <div className="items-center justify-items-start">
              <SimpleInputSearch
                label="Busca Rápida"
                nameInput="busca-pedido"
                placeholder="Busca Rápida"
                value=""
                onChangeValue={() => {
                  console.log('entrou')
                }}
              />
            </div>
            <div className="item-center justify-items-end">
              <SelectInput />
            </div>
          </div>
          <div className="max-h-[550px] overflow-y-auto w-full">
            <table className="text-xs table-auto w-full h-full border-collapse text-black bg-gray-300 border-neutral-500 border">
              <thead>
                <tr className="text-center text-lg text-gray-400">
                  <th className="p-4">Nome pedido</th>
                  <th className="p-4">Quantidade itens</th>
                  <th className="p-4">Data do pedido</th>
                  <th className="p-4">Fornecedor</th>
                  <th className="p-4">Detalhes do Pedido</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {pedidos.map((pedido: Pedido) => (
                  <TableRowPedido key={pedido.id} product={pedido} />
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
