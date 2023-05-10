import { Sidebar } from "./Sidebar"


export function Layout({children}){
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar/>
      <main className="bg-primary flex-1 p-4 text-white border-1 border-dashed ">
        {children}
      </main>
    </div>
  )
}