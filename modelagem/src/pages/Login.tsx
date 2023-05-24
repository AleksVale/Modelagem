import AlternativeLayout from '@/components/AlternativeLayout'
import SimpleInput from '@/components/SimpleInput'
import React, { FormEvent, useCallback, useState } from 'react'
import { signIn } from 'next-auth/react'

export default function Login() {
  const [nomeUsuario, setNomeUsuario] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  const onSubmit = useCallback(
    async (form: FormEvent) => {
      form.preventDefault()
      try {
        // Pass the parameters to the signIn function
        await signIn('credentials', {
          username: nomeUsuario,
          password: senha,
          redirect: true,
          callbackUrl: 'http://localhost:3000/',
        })
        // Handle successful authentication
      } catch (error) {
        // Handle authentication error
        console.error(error)
      }
    },
    [nomeUsuario, senha],
  )
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-3/4"
    >
      <SimpleInput
        value={nomeUsuario}
        label="Nome de Usuário"
        nameInput="name"
        placeholder="Insira o nome de Usuário"
        onChangeValue={(e) => {
          setNomeUsuario(e)
        }}
      />
      <SimpleInput
        label="senha"
        value={senha}
        placeholder="Insira a senha"
        type="password"
        nameInput="password"
        onChangeValue={(e) => {
          setSenha(e)
        }}
      />
      <button className="px-4 py-2 mt-6 rounded-lg bg-red-600">Logar</button>
    </form>
  )
}

Login.getLayout = function (page: React.ReactNode) {
  return <AlternativeLayout>{page}</AlternativeLayout>
}
