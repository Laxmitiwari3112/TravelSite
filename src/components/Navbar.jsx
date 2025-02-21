import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='absolute m-3 top-0 right-0 left-0 z-50'>
        <div className='container px-4 md:px-6 font-bold text-white flex justify-between items-center h-16 text-xl md:text-2xl bg-black opacity-70 rounded-xl'>
            <h3 className='italic underline'>TravelBucket</h3>
            <div className='flex space-x-2 md:space-x-4'>
                <Link to="/" className='hover:underline hover:opacity-70 '>Home</Link>
                <Link to="/" className='hover:underline hover:opacity-70 '>Gallery</Link>
                <Link to="/" className='hover:underline hover:opacity-70'>Contact_Us</Link>
                <Link to="/" className='hover:underline hover:opacity-70 ' >About_Us</Link>
                <Link to="/" className='border px-2 rounded-2xl hover:bg-blue-500'>Login</Link>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
