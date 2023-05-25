import React, { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Inter } from 'next/font/google'
import { getSession } from 'next-auth/react'
import { GetServerSidePropsContext } from 'next'

const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <main className="flex flex-row justify-start grow">
        <Sidebar />
        <div
          className={`${inter.className} bg-primary flex-1 p-4 text-white border-1 border-dashed`}
        >
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/Login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: session.user,
    },
  }
}
