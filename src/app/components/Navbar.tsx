import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiSearch, FiUser } from 'react-icons/fi'
import { LiaShoppingBagSolid } from 'react-icons/lia'

const Navbar = () => {
    return (
        <div className='z-[100] fixed top-0 left-0 w-full bg-[#14191e99] backdrop-blur-[20px] border-[3px] border-[#14191ebe] rounded-[10px]'>
            <div className="navbar container">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden md:hidden block">
                        <div tabIndex={0} role="button" className="btn bg-[#14191e99] backdrop-blur-[20px] border-1 border-[#14191ebe] btn-circle">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow">
                            <li><Link href=''>Men</Link></li>
                            <li><Link href=''>Women</Link></li>
                            <li><Link href=''>Kits</Link></li>
                            <li><Link href=''>Community</Link></li>
                        </ul>
                    </div>
                    <div className="gap-[35px] lg:flex md:flex hidden">
                        <Link href=''>Men</Link>
                        <Link href=''>Women</Link>
                        <Link href=''>Kits</Link>
                        <Link href=''>Community</Link>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link href='' className="logo">
                        <Image className='w-[75px] h-[75px]' src='/images/logo.png' width={100} height={100} alt='logo' />
                    </Link>
                </div>
                <div className="navbar-end flex lg:gap-[15px] md:gap-[10px] gap-0">
                    <Link href='' className="lg:text-[20px] md:text-[18px] text-[16px] w-[35px] p-0 h-[35px] flex items-center justify-center btn btn-ghost btn-circle hover:bg-[#26262680]"><FiSearch /></Link>
                    <Link href='' className="lg:text-[20px] md:text-[18px] text-[16px] w-[35px] p-0 h-[35px] flex items-center justify-center btn btn-ghost btn-circle hover:bg-[#26262680]"><FiUser /></Link>
                    <Link href='' className="lg:text-[20px] md:text-[18px] text-[16px] w-[35px] p-0 h-[35px] flex items-center justify-center btn btn-ghost btn-circle hover:bg-[#26262680]"><LiaShoppingBagSolid /></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
