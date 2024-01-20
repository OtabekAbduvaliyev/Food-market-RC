import React from 'react'
import navLogo from '../images/food 2.png'
import { FaSearch } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { FaBars } from "react-icons/fa";
import allfood from '../images/photo_2024-01-17_21-29-55-removebg-preview.png'
import firstsectionimg from '../images/order 1.png'
export const Header = () => {
  return (
    <div className='for-bg-h'>
        <header className='m-auto max-w-6xl pb-28'>
            <nav className='pt-[35px]'>
                <div className="nav-logo">
                    <p className='font-semibold text-2xl'>Let’sFood</p>
                    <img src={navLogo} alt="" />
                </div>
                <ul className='nav-ul flex gap-5'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">How it works </a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <div className="nav-social">
                <FaSearch className='text-2xl'/>
                <FaShoppingBasket className='text-3xl'/>
                <button className='bg-yellow-400 w-[122px] h-[38px] rounded-3xl'>
                    <LuLogIn className='text-xl'/>
                    <p className='font-bold'>Sign in</p>
                </button>
                <FaBars className='text-3xl bar ' onClick={()=>{
                    let ul = document.querySelector('ul')
                    // console.log('salom');
                    ul.classList.toggle('active')
                }}/>
                </div>
            </nav>
            <div className="header-main flex justify-between flex-wrap">
                <div className="header-main-inf mt-52">
                    <h1 className='font-sans text-5xl font-semibold'>Be The Fastest In <br /> Delivery Your <span className='text-yellow-400'>Food</span></h1>
                    <p className='text-gray-400 mt-8'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut aliquam, purus sit amet</p>
                    <button className='bg-yellow-400 rounded-3xl w-[122px] h-[38px] mt-6'>Get Started</button>
                </div>
                <div className="header-main-imgs">
                    <img src={allfood} alt="" className='mt-4' />
                </div>
            </div>
        </header>
    </div>
  )
}
export default Header