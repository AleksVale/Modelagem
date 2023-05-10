import { FaGithub } from 'react-icons/fa'
import { IoMdPeople } from 'react-icons/io';


export function Sidebar(){
  return (
    <div className="h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col border border-dashed">
      <ul className="h-screen flex justify-between flex-col dark:bg-red-400">
        <li className='flex'><IoMdPeople size={24}/> produto</li>
        <li>pedido</li>
        <li>estoque</li>
        <li>funcionario</li>
      </ul>
    </div>
  )
}