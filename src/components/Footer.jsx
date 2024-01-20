import React from 'react'
import logo from '../images/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className='f-wrapper pb-[100px] mt-[100px]'>
        <footer className='max-w-[1200px] m-auto flex justify-between gap-7'>
            <div className="fr-section pt-[99px]">
                <img src={logo} alt="" /> 
                <p className='mt-[25px]'>Jalan Semangka Raya, Telaga <br /> Murni,Cikarang Barat, Kab. Bekasi</p>
                <div className="footer-media flex gap-3 mt-[32px]">
                <FaInstagram className='f-icon shadow-xl'/>
                <FaFacebookF className='f-icon shadow-xl'/>
                <FaXTwitter className='f-icon shadow-xl'/>
                </div>
            </div>
            <div className="sc-section pt-[99px]">
              <p className='text-2xl font-semibold'>Company</p>
              <a href="#" className='mt-[9px]'>About Us</a>
              <a href="#">Career</a>
              <a href="#">How It Work</a>
            </div>
            <div className="sc-section pt-[99px]">
              <p className='text-2xl font-semibold'>Policy</p>
              <a href="#" className='mt-[9px]'>Faq</a>
              <a href="#">Privacy</a>
              <a href="#">Shipping</a>
            </div>
            <div className="sc-section pt-[99px]">
              <p className='text-2xl font-semibold'>Get In Touch</p>
              <a href="#" className='mt-[9px]'>+62 896 7311 2766</a>
              <a href="#">food@example.com</a>
            </div>
        </footer>
    </div>
  )
}
export default Footer