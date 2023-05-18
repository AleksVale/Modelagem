import AlternativeLayout from '@/components/AlternativeLayout'
import SimpleInput from '@/components/SimpleInput'
import React, { useState } from 'react'

export default function Login() {
  const [nomeUsuario, setNomeUsuario] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  return (
    <div className="flex flex-col items-center justify-center">
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
    </div>
  )
}

Login.getLayout = function (page: React.ReactNode) {
  return <AlternativeLayout>{page}</AlternativeLayout>
}
