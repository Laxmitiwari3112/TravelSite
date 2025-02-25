import React from 'react'
import PopularDestination from '../components/PopularDestination'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import img4 from '../assets/img4.jpeg'
// import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className='relative h-screen bg-cover bg-center brightness-80 xs:h-90 md:h-97'
        style={{ backgroundImage: `url(${img4})` }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* <div className="flex"> */}
          {/* <h1 className='text-white text-3xl italic font-bold'>HOME</h1> */}
          <p className='text-white px-6 py-4 text-4xl md:text-7xl  text-center font-bold italic'>Discover story-worthy travel moments.</p>
          <button
            className='
                border font-bold text-white px-6 py-1 rounded-full hover:bg-blue-400'> Get Started</button>
        </div>
      </div>
      <PopularDestination/>
      <Services/>
      <Gallery/>
      {/* <Footer/> */}
    </>
  )
}

export default Home
