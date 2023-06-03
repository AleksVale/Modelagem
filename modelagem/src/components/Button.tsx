import React, { FormEvent } from 'react'

interface ButtonProps {
  hasCancel?: boolean
  labelConfirm?: string
  handleConfirmButtonClicked: (e: FormEvent) => void
}

const Button: React.FC<ButtonProps> = ({
  hasCancel = true,
  labelConfirm = 'Cadastrar',
  handleConfirmButtonClicked,
}) => {
  return (
    <div className="py-14 flex gap-5 grow justify-end items-end w-full">
      {hasCancel && (
        <button className="font-bold w-32 h-10 rounded-xl bg-red-400 hover:bg-red-600 ease-in-out duration-300">
          Cancelar
        </button>
      )}
      <button
        className="font-bold w-32 h-10 rounded-xl bg-red-300 hover:bg-rose-400  ease-in-out duration-300"
        onClick={handleConfirmButtonClicked}
      >
        {labelConfirm}
      </button>
    </div>
  )
}

export default Button
