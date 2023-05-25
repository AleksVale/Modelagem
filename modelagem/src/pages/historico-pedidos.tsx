import SelectInput from '@/components/SelectInput'
import SimpleInput from '@/components/SimpleInput'
import SimpleInputSearch from '@/components/SimpleInputSerach'

export default function HistoricoPedidos() {
  return (
    <div>
      <h1 className="text-black text-5xl text-center pt-10">
        Histórico Pedidos
      </h1>
      <div className=" flex flex-col  m-auto pt-10 w-full max-w-screen-lg">
        <div className="max-h-[400px] overflow-y-auto">
          <div className="flex items-center ">
            <div className="items-center justify-items-start">
              <SimpleInputSearch
                label="Busca Rápida"
                nameInput="busca-pedido"
                placeholder="Busca Rápida"
              />
            </div>
            <div className="item-center justify-items-end">
              <SelectInput />
            </div>
          </div>
          <table className=" text-xs table-auto w-full border-collapse text-black bg-gray-300 border-neutral-500 border">
            <thead>
              <tr className="text-center  text-gray-400">
                <th className="p-4">Nome pedido</th>
                <th className="p-4">Quantidade itens</th>
                <th className="p-4">Data do pedido</th>
                <th className="p-4">Fornecedor</th>
                <th className="p-4">Detalhes do Pedido</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="flex justify-end w-full mt-12"></div>
      </div>
    </div>
  )
}
