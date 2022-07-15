import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const PersonalInformation = ({ userDetails, setUserDetails, setPages }) => {
  function handleKeydDown(e) {
    if (e.key === 'Enter') {
      setPages((pages) => pages + 1)
    }
  }

  return (

    <>
    <motion.label
        initial={{ x: -700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}


        htmlFor="email " className='step-0 font-bold'>Email </motion.label>
      <motion.input id='email'
        initial={{ x: -700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        className='border-slate-400 | border-2 | placeholder:italic | placeholder:text-slate-400 |  p-2 | focus:outline-blue-500 ' type="email"
        placeholder='Enter your email'
        value={userDetails.email}
        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
        onKeyDown={(e) => handleKeydDown(e)}

      />

      <motion.label
        initial={{ x: -700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}


        htmlFor="firstname " className='step-0 font-bold'>First Name </motion.label>
      <motion.input id='firstname'
        initial={{ x: -700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        className='border-slate-400 | border-2 | placeholder:italic | placeholder:text-slate-400 |  p-2 | focus:outline-blue-500 ' type="text"
        placeholder='Enter your first name'
        value={userDetails.firstName}
        onChange={(e) => setUserDetails({ ...userDetails, firstName: e.target.value })}
        onKeyDown={(e) => handleKeydDown(e)}

      />
      <motion.label
        initial={{ x: -700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }} htmlFor="lastname " className='step-0 font-bold' >Last Name </motion.label>
      <motion.input
        initial={{ x: -700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        id='lastname'
        className='border-slate-400 | border-2 | p-2 | placeholder:italic | placeholder:text-slate-400 | focus:outline-blue-500'
        placeholder='Enter your last name' type="text"
        value={userDetails.lastName}
        onChange={(e) => setUserDetails({ ...userDetails, lastName: e.target.value })}
        onKeyDown={(e) => handleKeydDown(e)}
      />

    </>

  )
}

export default PersonalInformation