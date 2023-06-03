import { signIn, signOut, useSession } from 'next-auth/react'
import router from 'next/router'
import React, { useCallback } from 'react'

import AlternativeLayout from '@/components/AlternativeLayout'
import Link from 'next/link'

import { Poppins } from 'next/font/google'
import { BsBoxSeam, BsBuildingLock, BsFileEarmarkLock } from 'react-icons/bs'
import {
  MdOutlineRequestQuote,
  MdPeopleOutline,
  MdOutlineWorkHistory,
  MdOutlineAddBusiness,
  MdOutlineGroupAdd,
} from 'react-icons/md'

import { FaUserLock } from 'react-icons/fa'
import { GiLockedDoor } from 'react-icons/gi'

import { ImBlocked } from 'react-icons/im'
import { TbHistoryOff } from 'react-icons/tb'

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession()

  const handleSignIn = useCallback(() => {
    signIn()
  }, [])
  const handleSignOut = useCallback(() => {
    signOut()
    router.push('/Login') // Redirect to the login page after logout
  }, [])
  return (
    <div className="w-screen m-auto text-center justify-center pt-10">
      <h1 className={`${poppins.className} text-7xl`}>
        Bem vindo ao <span>APP ODONTO 3000</span>
      </h1>
      <div className="w-full flex justify-center items-center my-28 text-left">
        <div className="grid grid-cols-3 gap-36 bg-red-100 border border-neutral-400 rounded-2xl  p-8">
          <Link className="flex flex-col items-center" href="./estoque">
            {session ? <BsBoxSeam size={35} /> : <GiLockedDoor size={35} />}
            Estoque
          </Link>
          <Link className="flex flex-col items-center" href="./funcionarios">
            {session ? <MdPeopleOutline size={35} /> : <FaUserLock size={35} />}
            Ver os funcionarios
          </Link>
          <Link
            className="flex flex-col items-center"
            href="./cadastro-funcionario"
          >
            {session ? (
              <MdOutlineGroupAdd size={35} />
            ) : (
              <ImBlocked size={35} />
            )}
            Adicionar funcionário
          </Link>
          <Link
            className="flex flex-col items-center"
            href="./cadastro-produto"
          >
            {session ? (
              <MdOutlineAddBusiness size={35} />
            ) : (
              <BsBuildingLock size={35} />
            )}
            Cadastrar produto novo
          </Link>
          <Link className="flex flex-col items-center" href="./pedidos">
            {session ? (
              <MdOutlineRequestQuote size={35} />
            ) : (
              <BsFileEarmarkLock size={35} />
            )}
            Criar um novo pedido
          </Link>
          <Link
            className="flex flex-col items-center"
            href="./historico-pedidos"
          >
            {session ? (
              <MdOutlineWorkHistory size={35} />
            ) : (
              <TbHistoryOff size={35} />
            )}
            Histórico de pedidos
          </Link>
        </div>
      </div>

      {session ? (
        <button
          onClick={handleSignOut}
          type="button"
          className="px-4 py-2 mt-6 rounded-lg bg-red-500 hover:bg-red-600 w-52 h-14 text-white text-lg transition-colors duration-300 ease-in-out"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleSignIn}
          type="button"
          className="px-4 py-2 mt-6 rounded-lg bg-rose-400 hover:bg-rose-500 w-52 h-14 text-white text-lg transition-colors duration-300 ease-in-out"
        >
          Login
        </button>
      )}
    </div>
  )
}

Home.getLayout = function (page: React.ReactNode) {
  return <AlternativeLayout>{page}</AlternativeLayout>
}
