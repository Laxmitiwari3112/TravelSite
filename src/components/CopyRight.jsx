import React from 'react'
import { FaCopyright } from 'react-icons/fa6'

const CopyRight = () => {
  return (
    <div className='mt-6 text-white flex justify-center'>
      <div className='flex justify-center items-center'><FaCopyright/></div>
      <p className='p-2'>@TravelBucket...CopyRight Claim</p>
    </div>
  )
}

export default CopyRight
