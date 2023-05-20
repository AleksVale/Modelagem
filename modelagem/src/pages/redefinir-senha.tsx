import AlternativeLayout from '@/components/AlternativeLayout'
import SimpleInput from '@/components/SimpleInput'
import React, { useState } from 'react'

export default function Login() {
  /*const [nomeUsuario, setNomeUsuario] = useState<string>('')*/
  const [senha, setSenha] = useState<string>('')
  const [cpfCro, setCpfCro] = useState<string>('')
  return (
    <div>
      <h1 className="text-black text-5xl text-center pt-32">Redefinir senha</h1>
      <div className="flex flex-col items-center justify-center py-20">
        <SimpleInput
          label="CPF/CRO"
          value={cpfCro}
          nameInput="cpfCro"
          placeholder="Insira o CPF ou CRO"
          onChangeValue={(e) => {
            setCpfCro(e)
          }}
        />
        <SimpleInput
          label="Digite a nova senha"
          value={senha}
          placeholder="Insira a senha"
          type="password"
          nameInput="password"
          onChangeValue={(e) => {
            setSenha(e)
          }}
        />
        <SimpleInput
          label="Confirme a senha"
          value={senha}
          placeholder="Confirme a senha digitada"
          type="password"
          nameInput="password"
          onChangeValue={(e) => {
            setSenha(e)
          }}
        />
      </div>
    </div>
  )
}

Login.getLayout = function (page: React.ReactNode) {
  return <AlternativeLayout>{page}</AlternativeLayout>
}
