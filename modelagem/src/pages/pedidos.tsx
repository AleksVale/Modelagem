import Button from '@/components/Button'
import SimpleInput from '@/components/SimpleInput'
import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import router from 'next/router'
import { useCallback, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export default function Pedidos() {
  const [nomePedido, setNomePedido] = useState('')
  const [fornecedor, setFornecedor] = useState('')
  const [nomeProduto, setNomeProduto] = useState('')
  const [lote, setLote] = useState('')
  const [quantidade, setQuantidade] = useState(0)

  const submitForm = useCallback(() => {
    const requestBody = {
      nomePedido,
      fornecedor,
      produtos: [
        {
          idProduto: 1,
          lote,
          quantidade,
        },
      ],
    }

    axios
      .post('http://localhost:3000/api/cadastro-pedido', requestBody)
      .then((response) => {
        console.log(response.data)
        router.push('/') // Redirect to the index page
      })
      .catch((error) => {
        console.error(error)
      })

    return true
  }, [nomePedido, fornecedor, lote, quantidade])
  return (
    <div>
      <h1 className="text-black text-5xl text-left pt-10">Pedido</h1>
      <div className=" flex flex-col pt-10 w-full">
        <div className="flex gap-10 w-full border-collapse text-black pb-6">
          <SimpleInput
            nameInput="nomePedido"
            label="Insira o nome do pedido"
            placeholder="Dê nome ao pedido a ser criado"
            value={nomePedido}
            onChangeValue={(e) => {
              setNomePedido(e)
            }}
          />
          <SimpleInput
            nameInput="nomeFornecedor"
            label="Insira o fornecedor"
            placeholder="Preencha o fornecedor"
            value={fornecedor}
            onChangeValue={(e) => {
              setFornecedor(e)
            }}
          />
        </div>
        <div className="flex gap-10 w-full">
          <SimpleInput
            nameInput="nomeProduto"
            label="Insira o produto"
            placeholder="Preencha o produto"
            value={nomeProduto}
            onChangeValue={(e) => {
              setNomeProduto(e)
            }}
          />
          <SimpleInput
            nameInput="numeroLote"
            label="Insira o lote"
            placeholder="Preencha o lote"
            value={lote}
            onChangeValue={(e) => {
              setLote(e)
            }}
          />
          <SimpleInput
            nameInput="quantidadeProduto"
            label="Insira a quantidade produto"
            placeholder="Preencha a quantidade do produto"
            value={quantidade}
            onChangeValue={(e) => {
              setQuantidade(parseInt(e, 10))
            }}
          />
        </div>
        <div className="flex flex-center pt-10">
          <button className="bg-neutral-400 p-4">
            <AiOutlinePlus className="text-zinc-700" />
          </button>
        </div>
        <div className="w-72">
          <Button handleConfirmButtonClicked={submitForm} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/Login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: session.user,
    },
  }
}
