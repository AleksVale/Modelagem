import { signIn } from 'next-auth/react'

export default function Home() {
  return (
    <button
      onClick={() => signIn()}
      type="button"
      className="px-4 py-2 mt-6 rounded-lg bg-red-600"
    >
      Logar
    </button>
  )
}
