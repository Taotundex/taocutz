import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from 'react-icons/fa'
import { FaArrowRightLong, FaFacebook, FaXTwitter } from 'react-icons/fa6'
import { MdAlternateEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className="bg-[#14191e] pt-10 flex flex-col gap-5">
      <div className="container grid grid-cols-5 gap-10">
        <div className="linking md:col-span-3 col-span-5">
          <div className="grid grid-cols-3 md:gap-5 gap-2">
            <div className="shop">
              <header className='text-[10px] underline underline-offset-4 text-[#ffffffbe] py-3'>SHOP</header>
              <ul className='leading-8 text-xs'>
                <li><Link href=''>Shop All Men's</Link></li>
                <li><Link href=''>Shop All Women's</Link></li>
                <li><Link href=''>Gift Card</Link></li>
                <li><Link href=''>NYC Store</Link></li>
              </ul>
            </div>
            <div className="shop">
              <header className='text-[10px] underline underline-offset-4 text-[#ffffffbe] py-3'>#MADETHECUT</header>
              <ul className='leading-8 text-xs'>
                <li><Link href=''>About Us</Link></li>
                <li><Link href=''>Rewards</Link></li>
                <li><Link href=''>Careers</Link></li>
                <li><Link href=''>Military & First Responders</Link></li>
                <li><Link href=''>Corporate and Wholesale</Link></li>
                <li><Link href=''>Cuts Marketplace</Link></li>
              </ul>
            </div>
            <div className="shop">
              <header className='text-[10px] underline underline-offset-4 text-[#ffffffbe] py-3'>CONTACT</header>
              <ul className='leading-8 text-xs'>
                <li><Link href=''>FAQ</Link></li>
                <li><Link href=''>My Account</Link></li>
                <li><Link href=''>Track Order</Link></li>
                <li><Link href=''>Return & Exchanges</Link></li>
                <li><Link href=''>Shipping Protection $ Policy</Link></li>
                <li><Link href=''>Size + Fit</Link></li>
                <li><Link href=''>Contact Us</Link></li>
                <li><Link href=''>Accessibility</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <form action="" className='flex flex-col gap-5 w-full md:col-span-2 col-span-5'>
          <label htmlFor="" className='uppercase text-[14px] leading-4 text-[#ffffffbe] w-full'>Join our newsletter to stay updated product launches, and promotions.</label>
          <div className="inputs flex items-center border-b border-b-[#ffffff30] w-full">
            <input className='bg-transparent border-none outline-none h-[45px] w-full px-[15px]' type="text" name="subscribe" id="subscribe" placeholder='Your email address' required />
            <button className='border-none bg-[#ffffff30] text-white h-[45px] w-[60px] flex items-center justify-center' type="submit"><FaArrowRightLong /></button>
          </div>
          <div className="socials flex items-center justify-center gap-3">
            <Link href="#" className='h-[45px] md:w-[60px] w-full rounded-[5px] border-2 border-[#ffffff30] flex items-center justify-center text-[20px] bg-[#ffffff30] text-white hover:bg-[#ffffff80] hover:text-[#14191e] transition-all'><FaFacebook /></Link>
            <Link href="#" className='h-[45px] md:w-[60px] w-full rounded-[5px] border-2 border-[#ffffff30] flex items-center justify-center text-[20px] bg-[#ffffff30] text-white hover:bg-[#ffffff80] hover:text-[#14191e] transition-all'><FaInstagram /></Link>
            <Link href="#" className='h-[45px] md:w-[60px] w-full rounded-[5px] border-2 border-[#ffffff30] flex items-center justify-center text-[20px] bg-[#ffffff30] text-white hover:bg-[#ffffff80] hover:text-[#14191e] transition-all'><FaXTwitter /></Link>
            <Link href="#" className='h-[45px] md:w-[60px] w-full rounded-[5px] border-2 border-[#ffffff30] flex items-center justify-center text-[20px] bg-[#ffffff30] text-white hover:bg-[#ffffff80] hover:text-[#14191e] transition-all'><FaLinkedin /></Link>
            <Link href="#" className='h-[45px] md:w-[60px] w-full rounded-[5px] border-2 border-[#ffffff30] flex items-center justify-center text-[20px] bg-[#ffffff30] text-white hover:bg-[#ffffff80] hover:text-[#14191e] transition-all'><FaTiktok /></Link>
            <Link href="#" className='h-[45px] md:w-[60px] w-full rounded-[5px] border-2 border-[#ffffff30] flex items-center justify-center text-[20px] bg-[#ffffff30] text-white hover:bg-[#ffffff80] hover:text-[#14191e] transition-all'><MdAlternateEmail /></Link>
            <Link href="#" className='h-[45px] md:w-[60px] w-full rounded-[5px] border-2 border-[#ffffff30] flex items-center justify-center text-[20px] bg-[#ffffff30] text-white hover:bg-[#ffffff80] hover:text-[#14191e] transition-all'><FaWhatsapp /></Link>
          </div>
        </form>
      </div>
      <div className="text-center text-[12px] bg-black leading-5 text-[#ffffffbe] py-3 w-full">
        <span>&copy; <i><strong>Taocutz</strong></i> 2025. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer
