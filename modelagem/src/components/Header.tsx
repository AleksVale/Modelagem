import Image from 'next/image'
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb'
import logo from '../assets/logo.png'
interface HeaderProps {
  isLogin?: boolean
}
export default function Header({ isLogin = false }: HeaderProps) {
  return (
    <header className="flex w-screen items-center justify-between bg-red-400 py-2 px-7">
      {!isLogin && <TbLayoutSidebarLeftCollapse size={42} color="#fff" />}
      <Image
        src={logo}
        alt="logo"
        className="bg-white px-8 py-4 rounded-full"
      />
    </header>
  )
}
