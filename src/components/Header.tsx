import React from 'react'
const FormTitles = [`Personal Information`, `Password`, `Confirmation`]
const Header = ({pages}) => {
  return (
    <header className='step-4 text-center font-bold'> {FormTitles[pages]} </header>
  )
}

export default Header