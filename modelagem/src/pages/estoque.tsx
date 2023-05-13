import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Estoque() {
  return (
    <section className={`${inter.className} flex flex-col pt-5 text-black items-center`}>
      <article>
       <h1 className="text-5xl">Estoque!</h1>
       
      </article>
    </section>
  )
}