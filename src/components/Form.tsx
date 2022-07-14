import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Confirmation from './Confirmation'
import Footer from './Footer'
import Header from './Header'
import PasswordScreen from './PasswordScreen'
import PersonalInformation from './PersonalInformation'
import ProgressBar from './ProgressBar'

const Form = () => {
  const [pages, setpages] = useState(0)
  const [userDetails, setUserDetails] = useState({
    firstName: ``,
    lastName: ``,
    password: ``,
  })
  const [confirmPassword, setConfirmPassword] = useState(``)
  const [error, setError] = useState(false)
  function showContent(pages: number) {
    switch (pages) {
      case 0:
        return <PersonalInformation userDetails={userDetails} setUserDetails={setUserDetails} setPages={setpages} />
      case 1:
        return <PasswordScreen 
        submitHandler={submitHandler}
        userDetails={userDetails} 
        setUserDetails={setUserDetails} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} />
      case 2:
        return <Confirmation userDetails={userDetails} setUserDetails={setUserDetails} />
      default:
        return <PersonalInformation userDetails={userDetails} setUserDetails={setUserDetails} setPages={setpages} />
    }

  }
  function submitHandler() {
    if (confirmPassword === userDetails.password && userDetails.password.length > 0) {
      setpages(2)
      setError(false)
    }
    else (
      setError(true)
    )
  }
  console.log(userDetails)
  console.log(confirmPassword)


  return (
    <div className="cover mx-auto padding-large min-h-screen max-w-[640px]   ">
      <ProgressBar page={pages} />

      <main className="form-content| border-slate-700 border-2 | grid | grid-cols-1 | stack | place-content-center | padding-xs | rounded-md">
        <Header pages={pages} />
        {showContent(pages)}
        {error && <motion.div
          initial={{ y: -700, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className='text-center text-red-600 font-semibold'> Passwords do not match</motion.div>}
        <Footer setpages={setpages} pages={pages} submitHandler={submitHandler} />

      </main>

    </div>
  )
}

export default Form