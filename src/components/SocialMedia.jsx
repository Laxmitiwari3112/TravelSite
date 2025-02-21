import React from 'react'
import { FaFacebookMessenger, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className='px-25'>
      <h3 className='py-4 text-center text-4xl font-semibold'>Follow Us</h3>
      <div className='flex justify-center gap-3'>
        <FaInstagram/>
        <FaFacebookMessenger/>
        <FaSquareXTwitter/>
      </div>
    </div>
  )
}

export default SocialMedia
