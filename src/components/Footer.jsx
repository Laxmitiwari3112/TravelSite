import React from 'react'
import AboutUs from './AboutUs'
import SocialMedia from './SocialMedia'
import CopyRight from './CopyRight'

const Footer = () => {
  return (
    <div className='bg-blue-950 text-white p-12'>
      <AboutUs/>
      <SocialMedia/>
      <CopyRight/>
    </div>
  )
}

export default Footer
