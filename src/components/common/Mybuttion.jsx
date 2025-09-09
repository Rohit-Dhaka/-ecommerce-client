import React from 'react'

const Mybuttion = ({ name, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-black text-white font-outfit font-bold py-4 px-10 rounded-md transition 
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
    >
      {name}
    </button>
  )
}

export default Mybuttion
