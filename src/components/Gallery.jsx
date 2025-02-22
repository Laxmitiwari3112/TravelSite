// import React from 'react'
import React, { useState } from "react";

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
    {
        image: img2,
        title: 'paris,france',
    }, {
        image: img2,
        title: 'paris,france',
    }, {
        image: img2,
        title: 'paris,france',
    },
];


const Gallery = () => {
    const [showAll, setShowAll] = useState(false);
    return (
        <div className=' bg-gray-200 auto p-8'>
            <div className='font-bold text-5xl p-2 mb-4 text-center'>
                Gallery
            </div>
            <div className='grid gap-1  grid-cols-2 sm:grid-cols-2 md:grid-cols-3'>
                {gallery.slice(0, showAll ? gallery.length : 6).map((city, index) => (
                    <div className=''>           
                        <img className='object-cover w-full h-full hover:scale-96 ' 
                             src={city.image} 
                             alt={`Gallery ${index+1}`}
                             key={index}   ></img>
                        {/* <div className='p-4'>
                            <h4 className='font-bold text-xl py-2'>{city.title}</h4>
                        </div> */}

                    </div>
                ))}
            </div>
            {/* View More Button */}
            {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 block mx-auto"
          >
            View More
          </button>
        )}
        {/* View Less Button */}
        {showAll && (
          <button
            onClick={() => setShowAll(false)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-blue-600 block mx-auto"
          >
            View Less
          </button>
        )}
        </div>
      
    )
};

export default Gallery
