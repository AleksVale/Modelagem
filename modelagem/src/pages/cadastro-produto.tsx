import Button from '@/components/Button'
import SimpleInput from '@/components/SimpleInput'
import axios from 'axios'
import { FormEvent, useCallback, useState } from 'react'
import { ZodError, z } from 'zod'
import Swal from 'sweetalert2'

export default function CadastroFuncionario() {
  const [formData, setFormData] = useState({
    nomeProduto: '',
    descricao: '',
  })

  const [qtdMinima, setQtdMinima] = useState<number>()

  const handleZodError = useCallback((error: ZodError) => {
    const messages = error.errors.map(
      (validationError) => `• ${validationError.message}`,
    )
    const formattedMessage = messages.join('\n\n')
    Swal.fire({
      icon: 'error',
      title: 'Erro de validação',
      html: `<pre className="text-red-300">${formattedMessage}</pre>`,
    })
  }, [])

  const validateForm = useCallback(
    (formulario: {
      nomeProduto: string
      qtdMinima: number | undefined
      descricao: string
    }) => {
      const formSchema = z.object({
        nomeProduto: z
          .string({ required_error: 'Nome obrigatório' })
          .min(1, { message: 'Necessário ter um caractere' }),
        qtdMinima: z.number({
          required_error: 'Quantidade obrigatória',
          invalid_type_error: 'O tipo inserido deve ser numérico ',
        }),
        descricao: z
          .string({ required_error: 'Descrição obrigatória' })
          .max(250)
          .min(1, { message: 'Necessário ter um caractere' }),
      })
      formSchema.parse(formulario)
    },
    [],
  )

  const handleOnChangeInput = useCallback(
    (fieldValue: string, fieldName: string) => {
      console.log(typeof fieldValue)
      if (fieldName === 'qtdMinima') {
        setQtdMinima(parseInt(fieldValue))
      } else {
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue,
        }))
      }
    },
    [],
  )

  const resetFormData = useCallback(() => {
    setQtdMinima(undefined)
    setFormData({
      nomeProduto: '',
      descricao: '',
    })
  }, [])

  const handleSubmit = useCallback(
    (e: FormEvent<Element>) => {
      e.preventDefault()
      try {
        const params = {
          nomeProduto: formData.nomeProduto,
          qtdMinima,
          descricao: formData.descricao,
        }
        console.log(params)
        validateForm(params)
        axios
          .post('http://localhost:3000/api/cadastro-produto', params)
          .then((response) => {
            resetFormData()
          })
          .catch((error) => {
            console.error(error)
            // Realizar ações em caso de erro no envio
          })
      } catch (error) {
        if (error instanceof ZodError) {
          handleZodError(error)
        } else {
          Swal.fire({
            title: 'Error',
            text: `Erro: ${error}`,
            icon: 'error',
            confirmButtonText: 'Confirmar',
          })
        }
      }
    },
    [
      formData.descricao,
      formData.nomeProduto,
      handleZodError,
      qtdMinima,
      resetFormData,
      validateForm,
    ],
  )

  return (
    <div>
      <h1 className="text-black text-5xl text-center pt-32">
        Cadastro Produto
      </h1>
      <div className="flex flex-col items-center justify-center py-20">
        <form className="text-black  w-10/12 flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-10 justify-items-center w-5/12 pb-16">
            <SimpleInput
              nameInput="nomeProduto"
              label="Nome do produto"
              placeholder="Insira o nome do produto"
              value={formData.nomeProduto}
              onChangeValue={handleOnChangeInput}
            />
            <SimpleInput
              label="Quantidade Mínima"
              value={qtdMinima}
              nameInput="qtdMinima"
              placeholder="Insira a quantidade"
              onChangeValue={handleOnChangeInput}
            />
          </div>
          <div className=" flex flex-col w-5/12">
            <label htmlFor="descricao" className="self-start text-stone-400">
              Descrição
            </label>
            <textarea
              className="border  block rounded h-40 bg-red-100 border-red-300 resize-none placeholder:text-xs p-2"
              value={formData.descricao}
              placeholder="Escreve a descrição do produto"
              name="descricao"
              id="descricao"
              onChange={(e) => {
                handleOnChangeInput(e.target.value, 'descricao')
              }}
            ></textarea>
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
