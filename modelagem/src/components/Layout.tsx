import React, { ReactNode } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }) {
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
