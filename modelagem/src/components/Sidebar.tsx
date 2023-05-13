import { FaGithub } from 'react-icons/fa'
import { IoMdPeople } from 'react-icons/io';
import { BsBoxSeam } from 'react-icons/bs';
import { MdOutlineRequestQuote, MdWorkHistory } from 'react-icons/md';
import { Inter } from 'next/font/google'
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })



export function Sidebar(){
  return (
    <aside className="px-4 text-white pt-8 pb-4 bg-rose-400 flex justify-between flex-col">
      <nav className={`${inter.className} text-xs  flex justify-between flex-col`}>
        <ul className='flex gap-11 flex-col'>
          <li ><Link href='/estoque' className='flex flex-col items-center'><BsBoxSeam size={35}/>Estoque</Link></li>
          <li className='flex flex-col items-center'><Link href='/pedidos' className='flex flex-col items-center'><MdOutlineRequestQuote size={35}/>Pedido</Link></li>
          <li className='flex flex-col items-center'><Link href='/historico-pedidos' className='flex flex-col items-center'><MdWorkHistory size={35}/> <span>Histórico</span> <span>pedidos</span></Link></li>
          <li className='flex flex-col items-center'><Link href='/funcionarios' className='flex flex-col items-center'><IoMdPeople size={35}/>Funcionarios</Link></li>
        </ul>
      </nav>
    </aside>
  )
}