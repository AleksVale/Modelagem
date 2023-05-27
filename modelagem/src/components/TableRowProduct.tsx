import { Product } from '@/Interfaces/API'
import axios from 'axios'
import React, { useState, useCallback } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { TbTrashFilled } from 'react-icons/tb'
import Swal from 'sweetalert2'

interface TableRowProductProps {
  product: Product // Assuming you have a Product interface or type defined
}

const TableRowProduct: React.FC<TableRowProductProps> = ({ product }) => {
  const [qtde, setQtde] = useState<number>(product.quantidade)

  const handlePlusButtonClicked = useCallback(() => {
    const updatedQtde = qtde + 1

    // Make the PUT API request to update the quantity
    axios
      .put(`http://localhost:3000/api/estoque/${product.id}`, {
        quantidade: updatedQtde,
      })
      .then((response) => {
        // Update the local state with the new quantity
        setQtde(updatedQtde)
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: `Erro: ${error}`,
          icon: 'error',
          confirmButtonText: 'Confirmar',
        })
        // Handle the error accordingly (e.g., show an error message)
      })
  }, [product.id, qtde])

  const handleMinusButtonClicked = useCallback(() => {
    if (qtde <= 0) return // Don't allow the quantity to go below zero

    const updatedQtde = qtde - 1

    // Make the PUT API request to update the quantity
    axios
      .put(`http://localhost:3000/api/estoque/${product.id}`, {
        quantidade: updatedQtde,
      })
      .then((response) => {
        // Update the local state with the new quantity
        setQtde(updatedQtde)
      })
      .catch((error) => {
        console.error('Error updating quantity:', error)
        // Handle the error accordingly (e.g., show an error message)
      })
  }, [product.id, qtde])
  return (
    <tr key={product.id} className="text-center text-2xl">
      <td className="p-4 text-center">{product.name}</td>
      <td className="p-4 text-center">
        <p
          className={`flex items-center justify-center ${
            product.qtdMinima > product.quantidade ? 'text-red-800' : ''
          }`}
        >
          <button className="" onClick={handleMinusButtonClicked}>
            <AiOutlineMinus />
          </button>
          {qtde < 10 && `0`}
          {qtde + ' '}
          <button className="" type="button" onClick={handlePlusButtonClicked}>
            <AiOutlinePlus />
          </button>
        </p>
      </td>
      <td>
        <button className="px-2">
          <BsInfoCircle />
        </button>
      </td>
      <td>
        <button className="px-2">
          <TbTrashFilled className="text-red-500" />
        </button>
      </td>
    </tr>
  )
}

export default TableRowProduct
