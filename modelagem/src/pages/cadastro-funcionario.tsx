import Button from '@/components/Button'
import SimpleInput from '@/components/SimpleInput'
import axios from 'axios'
import { FormEvent, useCallback, useState } from 'react'

export default function CadastroFuncionario() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    nomeUsuario: '',
    senha: '',
    confirmarSenha: '',
    cargo: '',
    cpfCro: '',
  })

  const handleOnChangeInput = useCallback(
    (fieldValue: string, fieldName: string) => {
      setFormData((prevState) => ({
        ...prevState,
        [fieldName]: fieldValue,
      }))
    },
    [],
  )

  const resetFormData = useCallback(() => {
    setFormData({
      nomeCompleto: '',
      nomeUsuario: '',
      senha: '',
      confirmarSenha: '',
      cargo: '',
      cpfCro: '',
    })
  }, [])

  const handleSubmit = useCallback(
    (e: FormEvent<Element>) => {
      e.preventDefault()

      axios
        .post('http://localhost:3000/api/cadastro-funcionario', formData)
        .then((response) => {
          resetFormData()
        })
        .catch((error) => {
          console.error(error)
          // Realizar ações em caso de erro no envio
        })
    },
    [formData, resetFormData],
  )
  return (
    <div>
      <h1 className="text-black text-5xl text-center pt-32">
        Cadastro Funcionário
      </h1>
      <div className="flex flex-col items-center justify-center py-20">
        <form className="text-black  w-10/12 flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-10 justify-items-center w-5/12">
            <SimpleInput
              nameInput="nomeCompleto"
              label="Nome Completo"
              placeholder='Insira o nome'
              value={formData.nomeCompleto}
              onChangeValue={handleOnChangeInput}
            />
            <SimpleInput
              label="Nome Usuário"
              value={formData.nomeUsuario}
              nameInput="nomeUsuario"
              placeholder='Insira o nome de usuário'
              onChangeValue={handleOnChangeInput}
            />
            <SimpleInput
              nameInput="senha"
              label="Senha"
              type="password"
              placeholder='Insira a senha'
              value={formData.senha}
              onChangeValue={handleOnChangeInput}
            />
            <SimpleInput
              nameInput="confirmarSenha"
              label="Confirmar senha"
              type="password"
              placeholder='Insira a senha'
              value={formData.confirmarSenha}
              onChangeValue={handleOnChangeInput}
            />
            <SimpleInput
              nameInput="cargo"
              label="Selecione o cargo"
              placeholder='Selecione o cargo'
              value={formData.cargo}
              onChangeValue={handleOnChangeInput}
            />
            <SimpleInput
              nameInput="cpfCro"
              label="CPF/CRO"
              placeholder='Insira o CPF ou CRO'
              value={formData.cpfCro}
              onChangeValue={handleOnChangeInput}
            />
          </div>
          <Button
            handleConfirmButtonClicked={(e) => {
              handleSubmit(e)
            }}
          />
        </form>
      </div>
    </div>
  )
}
