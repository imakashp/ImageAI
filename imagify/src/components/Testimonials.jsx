import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20 py-12'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer testimonials</h1>
        <p className='text-gray-500 mb-12'>what are user saying </p>
        <div className='flex flex-wrap gap-6'>
          {testimonialsData.map((testimonail,index)=>(
            <div key={index}>
              <div>
                <img src={testimonail.image} alt="" className='rounded-full w-14'/>
                <h2>Helloo hiidfsdfdf</h2>
              </div>

            </div>
          ))}

        </div>    
    </div>
  )
}

export default Testimonials