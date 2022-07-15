import React from 'react'

const Confirmation = ({userDetails, setUserDetails}) => {
  return (
   <>
   <h2 className='font-semibold step-0'> Please Confirm your details are correct</h2>
   <article className='semi-bold'>Your email: {userDetails.email}  </article>
   <article className='semi-bold'>Your first name: {userDetails.firstName}  </article>
   <article className='semi-bold'>Your last name: {userDetails.lastName}  </article>
   </>
  )
}

export default Confirmation