import React from 'react'
import foodsimg from '../images/Group 7.png'
import user from '../images/card-testi.png'
export const Main = () => {
  return (
    <div>
        <main className='m-auto max-w-[1100px] flex gap-[101px] mt-[45px] items-center'>
            <img src={foodsimg} alt="" />
            <div className="main-inf">
            <p className='text-yellow-400 text-xl font-semibold'>What the say</p>
            <h3 className='font-bold text-3xl'>What Our Customers Say <br /> About Us</h3>
            <img src={user} alt="" className='mt-[32px]'/>
            </div>
        </main>
    </div>
  )
}
export default Main