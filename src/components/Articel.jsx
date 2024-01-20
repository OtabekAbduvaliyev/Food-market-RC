import React from 'react'
import { CiHeart } from "react-icons/ci";
import { useState } from 'react'
import frmealimg from '../images/unsplash_G6wx5j5-dR8.png'
import scmeallimg from '../images/unsplash_SqYmTDQYMjo.png'
import thmealimg from '../images/unsplash_zBONkjGFGko.png'
import fomealimg from '../images/unsplash_vg2p2BK57bY.png'
export const Articel = () => {
    const [menu, setMenu] = useState([
        { id: 1, img: frmealimg, title: 'Mie Ramen', text: 'lorem', price: '$20.2', like: <CiHeart /> },
        { id: 1, img: scmeallimg, title: 'Salad Tahu', text: 'lorem', price: '$20.2', like: <CiHeart /> },
        { id: 1, img: thmealimg, title: 'Roti Bakar', text: 'lorem', price: '$20.2', like: <CiHeart /> },
        { id: 1, img: fomealimg, title: 'Spaghetti', text: 'lorem', price: '$20.2', like: <CiHeart /> }
    ])
    return (
        <div>
            <article>
                <p className='text-yellow-400 text-xl font-semibold text-center mt-24'>Our Menu</p>
                <h2 className='text-2xl font-bold mt-2 text-center'>Our Popular Menu</h2>
                <p className='text-gray-400 text-base mt-5 text-center'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam</p>
                <div className='flex m-auto max-w-[1100px] gap-5 mt-8 meal-block'>
                    {menu.map((data2) => {
                        return (
                            <div key={data2.id} className='shadow-xl text-center w-[280px] border-solid border-slate-400 bg-gray-300 rounded-2xl'>
                                <img src={data2.img} alt="" className='w-[100%] max-w-[232px] ml-3'/>
                                <p className='text-2xl font-semibold bg-white mt-4'>{data2.title}</p>
                                <p className='text-gray-400 text-xl bg-white'>{data2.text}</p>
                                <div className="for-price flex items-center justify-between pl-5 pr-5 bg-white pt-2 rounded-b-2xl">
                                    <p className='text-xl font-semibold'>{data2.price}</p>
                                    <p className='text-2xl text-gray-400'>{data2.like}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="button text-center mt-24 ">
                <button className='w-[136px] bg-yellow-400 rounded-3xl h-10 font-bold'>More Menu</button>
                </div>
            </article>
        </div>
    )
}
export default Articel