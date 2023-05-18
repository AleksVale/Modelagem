import React, { ReactNode } from 'react'
import Header from './Header'

type AlternativeLayoutProps = {
  children: ReactNode
}

const AlternativeLayout = ({ children }: AlternativeLayoutProps) => {
  return (
    <div className="h-screen flex flex-col">
      <Header isLogin />
      <main className="flex-1 flex items-center justify-center mb-40">
        {children}
      </main>
    </div>
  )
}

export default AlternativeLayout
