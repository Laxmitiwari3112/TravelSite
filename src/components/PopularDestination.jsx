import React from 'react'
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'


// arr popularDestinations
const destinations = [
    {
        image: '/src/assets/img1.jpg',
        title: 'paris,france',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat expedita doloremque voluptas minima fugiat dolorum repellat voluptatem exercitationem minus!'
    },

    {
        image: '/src/assets/img2.jpg',
        title: 'paris,france',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat expedita doloremque voluptas minima fugiat dolorum repellat voluptatem exercitationem minus!'
    },

    {
        image: '/src/assets/img3.jpg',
        title: 'paris,france',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat expedita doloremque voluptas minima fugiat dolorum repellat voluptatem exercitationem minus!'
    },

    {
        image: '/src/assets/img1.jpg',
        title: 'paris,france',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat expedita doloremque voluptas minima fugiat dolorum repellat voluptatem exercitationem minus!'
    },

]

const PopularDestination = () => {
    return (
        <div className=' bg-gray-200 auto p-8'>
            <div className='font-bold text-5xl p-2 text-center'>
                Popular Destination
            </div>
            <div className='grid gap-1  grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {destinations.map((city, index) => (
                    <div className='m-4 pb-6 bg-white rounded-xl overflow-hidden  '>
                        <img className='object-cover w-full h-40 hover:2xl hover:scale-110 ' src={city.image} alt=''></img>
                        <div className='p-4'>
                            <h4 className='font-bold text-xl py-2'>{city.title}</h4>
                            <p>{city.description}</p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button
                                className='
                 px-6 py-1 bg-blue-300 items-center rounded-full hover:bg-blue-400'> Get Started</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularDestination
