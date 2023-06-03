import React, { useCallback, useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

interface ISimpleInputProps {
  type?: string
  label?: string
  placeholder?: string
  value: string | number | undefined
  nameInput: string
  onChangeValue: (value: string, fieldName: string) => void
}

const SimpleInput: React.FC<ISimpleInputProps> = ({
  type = 'text',
  label,
  placeholder,
  value,
  nameInput,
  onChangeValue,
}) => {
  const [typeInput, setTypeInput] = useState(type)
  const handleClickEye = useCallback(() => {
    setTypeInput((state) => (state === 'password' ? 'text' : 'password'))
  }, [])

  return (
    <div className="text-stone-400">
      {label && <p>{label}</p>}
      <div className="flex items-center relative w-80">
        <input
          className="px-2 placeholder:text-xs text-black bg-red-100 rounded border border-red-300 block w-24 md:w-32 lg:w-52 xl:w-60 2xl:w-80 h-8 pr-8 focus:outline-red-400"
          name={nameInput}
          type={typeInput}
          placeholder={placeholder || ''}
          onChange={(e) => onChangeValue(e.target.value, nameInput)}
          value={value || ''}
        />
        {type === 'password' && (
          <span className="absolute right-0 mr-2">
            {typeInput === 'password' && (
              <AiFillEye
                className="cursor-pointer opacity-60"
                color="#000"
                onClick={handleClickEye}
              />
            )}
            {typeInput === 'text' && (
              <AiFillEyeInvisible
                className="cursor-pointer opacity-60"
                color="#000"
                onClick={handleClickEye}
              />
            )}
          </span>
        )}
      </div>
    </div>
  )
}

export default SimpleInput
