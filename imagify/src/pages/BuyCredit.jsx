import React, { useContext } from 'react'
import { assets ,plans} from '../assets/assets'
import { AppContext } from '../context/AppContext';
const BuyCredit = () => {

  const{user}=useContext(AppContext)
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Ours plan</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>
    
    <div className='flex felx-wrap justify-center gap-6 text-left'>
      {plans.map((item,index)=>(
        <div key={index}>
          <img width={40} src={assets.logo_icon} alt=""/>
          <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
          <p className='text-sm'>{item.desc}</p>
          <p className='mt-6'>${item.price} / {item.credits} credits</p>
          <button className='w-full bg-gray-800 text-white'>{user ? 'Purchase':'Get Started'} </button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default BuyCredit