import React from 'react'
import img2 from '../assets/img2.jpg'

// arr Gallery of destinations
const gallery = [
    {
        image: img2,
        title: 'paris,france',
    },
    {
        image: img2,
        title: 'paris,france',
    },
    {
        image: img2,
        title: 'paris,france',
    },
    {
        image: img2,
        title: 'paris,france',
    },
    {
        image: img2,
        title: 'paris,france',
    },
    
]


const Gallery = () => {
    return (
        <div className=' bg-gray-200 auto p-8'>
            <div className='font-bold text-5xl p-2 mb-4 text-center'>
                Gallery
            </div>
            <div className='grid gap-1  grid-cols-2 sm:grid-cols-2 md:grid-cols-3'>
                {gallery.map((city, index) => (
                    <div className=''>
                        
                        <img className='object-cover w-full h-full hover:scale-99 ' src={city.image} alt=''></img>
                        <div className='p-4'>
                            {/* <h4 className='font-bold text-xl py-2'>{city.title}</h4> */}
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery
