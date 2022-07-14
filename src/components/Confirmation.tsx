import React from 'react'

const Confirmation = ({userDetails, setUserDetails}) => {
  return (
   <>
   <h2 className='font-semibold step-0'> Please Confirm your details are correct</h2>
   <article>Your First Name: {userDetails.firstName}  </article>
   <article>Your Last Name: {userDetails.lastName}  </article>
   </>
  )
}

export default Confirmation