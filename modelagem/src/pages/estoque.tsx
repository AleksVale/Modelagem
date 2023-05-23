import Button from '@/components/Button'
import SimpleInput from '@/components/SimpleInput'
import { Inter } from 'next/font/google'
import { BsInfoCircle } from 'react-icons/bs'
import { TbTrashFilled } from 'react-icons/tb'

const inter = Inter({ subsets: ['latin'] })

export default function Estoque() {
  return (
    <div>
      <h1 className="text-black text-5xl text-center pt-32">Estoque</h1>
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-black w-full h-full flex justify-center items-center">
          <table className="w-full h-full items-center justify-center">
            <thead>
              <tr className="text-2xl text-red-300">
                <th className="text-left pl-20 pr-72">Nome produto</th>
                <th className="">Quantidade</th>
                <th className="">Info.</th>
                <th className="">Deletar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-2xl">
                <td className="text-left pl-24 ">Anestésico</td>
                <td className="">5</td>
                <td>
                  <button>
                    <BsInfoCircle />
                  </button>
                </td>
                <td>
                  <button>
                    <TbTrashFilled className="text-red-500" />
                  </button>
                </td>
              </tr>
              <tr className="text-center text-2xl">
                <td className="text-left pl-24">Dycal</td>
                <td>10</td>
                <td>
                  <button>
                    <BsInfoCircle />
                  </button>
                </td>
                <td>
                  <button>
                    <TbTrashFilled className="text-red-500" />
                  </button>
                </td>
              </tr>
              <tr className="text-center text-2xl">
                <td className="text-left pl-24">Hipocloreto</td>
                <td className="pt-7">3</td>
                <td>
                  <button>
                    <BsInfoCircle />
                  </button>
                </td>
                <td>
                  <button>
                    <TbTrashFilled className="text-red-500" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 justify-items-center w-5/12">
        <Button />
      </div>
    </div>
  )
}
