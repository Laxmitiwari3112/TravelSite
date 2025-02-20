import React from 'react'
import flight from '../assets/flight.png'
import hotel from '../assets/hotel.png'
import concierge from '../assets/concierge.png'
import beach from '../assets/beach.png'

// arr of services
const services = [
    {
        icon: flight,
        title: 'Flight Services',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis.'
    },
    {
        icon: hotel,
        title: 'Flight Services',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis.'
    },
    {
        icon: beach,
        title: 'Flight Services',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis.'
    },
    {
        icon: concierge,
        title: 'Flight Services',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, perferendis.'
    },

]

const Services = () => {
    return (
        <div className=' bg-gray-200 auto p-8'>
            <div className='font-bold text-5xl p-2 text-center'>
                Our Services
            </div>
            <div className='grid gap-1 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {services.map((city, index) => (
                    <div className='m-4 p-2 bg-white rounded-xl overflow-hidden hover:scale-110'>
                        <div className='flex justify-center items-center'>
                            <img className=' w-20 m-2 h-20 hover:2xl flex justify-center items-center' src={city.icon} alt=''></img>
                        </div>
                        <div className='p-4 text-center'>
                            <h4 className='font-bold text-xl py-2'>{city.title}</h4>
                            <p>{city.description}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
