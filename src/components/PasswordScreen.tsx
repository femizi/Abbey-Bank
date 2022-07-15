import { motion } from 'framer-motion'
import React from 'react'

const PasswordScreen = ({ userDetails, setUserDetails, confirmPassword,setConfirmPassword, submitHandler }) => {
  function handleKeydDown(e) {
    if (e.key === 'Enter') {
      submitHandler()
    }
  }
  return (
    <>
      <motion.label
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        htmlFor="password " className='step-0 font-bold'>Password </motion.label>
      <motion.input id='password'
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        data-testid='password'
        className='border-slate-400 | border-2 | placeholder:italic | placeholder:text-slate-400 |  p-2 | focus:outline-blue-500 ' type="password"
        placeholder='Enter your passsword'
        value={userDetails.password}
        onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
        onKeyDown={(e)=> handleKeydDown(e)}
      />

      <motion.label
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        htmlFor="confrimPassword " className='step-0 font-bold' >Confirm Your Password </motion.label>
      <motion.input
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        datat-testid='confirmPassword'
        id='confirmPassword'
        className='border-slate-400 | border-2 | p-2 | placeholder:italic | placeholder:text-slate-400 | focus:outline-blue-500'
        placeholder='Confirm your password' type="password"
        value={confirmPassword}
        onChange={(e) =>  setConfirmPassword(e.target.value)} 
        onKeyDown={(e)=> handleKeydDown(e)}
        />
    </>
  )
}

export default PasswordScreen