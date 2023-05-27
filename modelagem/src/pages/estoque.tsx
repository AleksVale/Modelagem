import TableRowProduct from '@/components/TableRowProduct'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function Estoque() {
  interface Product {
    id: number
    name: string
    quantidade: number
    lote: string
    qtdMinima: number
  }
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Make API call here to retrieve the data
    // Replace `apiEndpoint` with the actual API endpoint
    axios
      .get('http://localhost:3000/api/estoque')
      .then((response) => {
        const data = response.data.product as Product[] // Explicitly cast response data as Product[]
        setProducts(data)
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: `Erro: ${error}`,
          icon: 'error',
          confirmButtonText: 'Confirmar',
        })
      })
  }, [])

  return (
    <div>
      <h1 className="text-black text-5xl text-left pt-10">Estoque</h1>
      <div className=" flex flex-col pt-10 w-full">
        <div className="max-h-[400px] overflow-y-auto">
          <table className="table-auto w-full border-collapse text-black bg-gray-300">
            <thead>
              <tr className="text-center text-2xl text-red-300">
                <th className="p-4">Nome produto</th>
                <th className="p-4">Quantidade</th>
                <th className="p-4">Info.</th>
                <th className="p-4">Deletar</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {products.map((product) => (
                <TableRowProduct key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end w-full mt-12">
          <Link href="/cadastro-produto" className="flex flex-col justify-end">
            <button className="bg-red-300 text-black w-52 rounded-lg">
              Adicionar novo produto
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
