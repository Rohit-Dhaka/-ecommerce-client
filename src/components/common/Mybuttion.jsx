import React from 'react'

const Mybuttion = ({ name, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-black text-white font-outfit sm:font-bold font-medium sm:py-4 py-2 sm:px-10 px-6 rounded-md transition 
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}`}
    >
      {name}
    </button>
  )
}

export default Mybuttion
