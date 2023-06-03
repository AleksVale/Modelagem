import React, { useState } from 'react'

const SelectInput = () => {
  const [selectedOption] = useState('')

  //   const handleOptionChange = (event) => {
  //     setSelectedOption(event.target.value)
  //   }

  return (
    <div>
      <label htmlFor="SelectInput" className="text-stone-400 block">
        Ordenar
      </label>
      <select
        className="px-2 placeholder:text-xs text-black bg-red-100 rounded border border-neutral-800 block w-24 md:w-32 lg:w-52 xl:w-60 2xl:w-80 h-8 pr-8 focus:outline-red-400"
        id="SelectInput"
        value={selectedOption}
        // onChange={handleOptionChange}
      >
        <option value="">Selecione uma opção</option>
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
        <option value="opcao3">Opção 3</option>
      </select>
    </div>
  )
}

export default SelectInput
