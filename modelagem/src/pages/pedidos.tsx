import Button from '@/components/Button'
import SimpleInput from '@/components/SimpleInput'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Pedidos() {
  return (
    <div>
      <h1 className="text-black text-5xl text-left pt-10">Pedido</h1>
      <div className=" flex flex-col pt-10 w-full">
        <div className="table-auto w-full border-collapse text-black pb-6">
          <SimpleInput
            nameInput="nomePedido"
            label={
              <span>
                Insira o nome do pedido
                <span className="text-red-500">*</span>
              </span>
            }
            placeholder="Dê nome ao pedido a ser criado"
            value={undefined}
          />
        </div>
        <div className="w-full h-80 bg-slate-600">
          <p className="text-black">TEM QUE FAZER AINDA</p>
        </div>
        <div className="flex flex-center pt-10">
          <button className="bg-neutral-400 p-4">
            <AiOutlinePlus className="text-zinc-700" />
          </button>
        </div>
        <Button />
      </div>
    </div>
  )
}
