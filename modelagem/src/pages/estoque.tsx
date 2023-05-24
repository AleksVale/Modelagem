import Button from '@/components/Button'
import SimpleInput from '@/components/SimpleInput'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { TbTrashFilled } from 'react-icons/tb'

const inter = Inter({ subsets: ['latin'] })

export default function Estoque() {
  return (
    <div>
      <h1 className="text-black text-5xl text-center pt-32">Estoque</h1>
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-black flex justify-center items-center">
          <table className=" items-center justify-center border-collapse">
            <thead>
              <tr className="text-2xl text-red-300">
                <th className="text-left pl-20 pr-64">Nome produto</th>
                <th className="">Quantidade</th>
                <th className="">Info.</th>
                <th className="">Deletar</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-2xl">
                <td className="text-left pl-20">Anestésico</td>
                <td className="inline-flex">
                  <button>
                    <AiOutlineMinus />
                  </button>
                  <p className="text-red-800">05</p>
                  <button>
                    <AiOutlinePlus />
                  </button>
                </td>
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
                <td className="text-left pl-20">Bisturi</td>
                <td className="inline-flex">
                  <button>
                    <AiOutlineMinus />
                  </button>
                  <p>15</p>
                  <button>
                    <AiOutlinePlus />
                  </button>
                </td>
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
                <td className="text-left pl-20">Cimento Cirúrgico</td>
                <td className="inline-flex">
                  <button>
                    <AiOutlineMinus />
                  </button>
                  <p>05</p>
                  <button>
                    <AiOutlinePlus />
                  </button>
                </td>
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
                <td className="text-left pl-20">Dycal</td>
                <td className="inline-flex">
                  <button>
                    <AiOutlineMinus />
                  </button>
                  <p>11</p>
                  <button>
                    <AiOutlinePlus />
                  </button>
                </td>
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
      <div className="flex justify-end">
        <Link href="/cadastro-produto" className="flex flex-col items-center">
          <button className="bg-red-300 text-black w-52 rounded-lg">
            Adicionar novo produto
          </button>
        </Link>
      </div>
    </div>
  )
}
