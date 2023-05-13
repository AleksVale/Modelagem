import { ReactNode } from "react"
import { Sidebar } from "./Sidebar"
import Header from "./Header"

type LayoutProps = {
  children: ReactNode
}

export function Layout({children}:LayoutProps){
  return (
    <div className="h-screen flex flex-col">
      <Header/>
        <main className="flex flex-row justify-start grow">
          <Sidebar/>
          <div className="bg-primary flex-1 p-4 text-white border-1 border-dashed ">
            {children}
          </div>
        </main>
    </div>
  )
}