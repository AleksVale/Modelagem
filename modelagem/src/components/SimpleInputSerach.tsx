import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

interface ISimpleInputSearchProps {
  type?: string
  label?: string
  placeholder?: string
  value: string
  nameInput: string
  onChangeValue: (value: string) => void
}

const SimpleInputSearch: React.FC<ISimpleInputSearchProps> = ({
  type = 'search',
  label,
  placeholder,
  value,
  nameInput,
  onChangeValue,
}) => {
  const [typeInput] = useState(type)

  return (
    <div className="text-stone-400">
      {label && <p>{label}</p>}
      <div className="flex items-center relative">
        <input
          className="px-2 placeholder:text-xs text-black bg-red-100 rounded border border-neutral-800 block w-24 md:w-32 lg:w-52 xl:w-60 2xl:w-96 h-8 pr-8 focus:outline-none focus:border-red-300"
          name={nameInput}
          type={typeInput}
          placeholder={placeholder || ''}
          onChange={(e) => onChangeValue(e.target.value)}
          value={value || ''}
        />
        <span className="absolute right-2 top-2">
          <AiOutlineSearch color="black" />
        </span>
      </div>
    </div>
  )
}

export default SimpleInputSearch
