import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaArrowRightLong } from 'react-icons/fa6'

const page = () => {
  return (
    <div className='h-screen bg-black text-white w-full flex items-center overflow-y-hidden md:bg-none bg-[url(/images/single1.jpeg)] bg-cover bg-right bg-no-repeat'>
        <div className="relative container md:grid block grid-cols-2 gap-[50px] items-center">
            <div className="myform h-auto flex items-center md:w-full w-[95%] md:px-0 px-[30px] py-[30px] md:bg-transparent bg-[#00000080] md:border-none border-[2px] border-[#ffffff49] backdrop-blur-[25px] rounded-[20px] mx-auto">
                <form action="" className='flex flex-col gap-[10px] w-full'>
                    <Image className='w-[125px] mx-auto' src="/images/logo.png" width={100} height={100} alt='logo' />
                    <center className='flex flex-col pb-5'>
                        <span className='text-[40px] font-extrabold'>LOGIN</span>
                        <span className='text-sm text-[#ffffffbe]'>Are you a new user? <Link href="signup" className='underline text-[#ffffff80] underline-offset-4'>Kindly signup here</Link></span>
                    </center>
                    <div className="flex flex-col gap-[30px]">
                        <div className="inputs flex flex-col gap-2">
                            <label htmlFor="" className='text-sm font-semibold text-[#ffffffbe]'>Email Address:</label>
                            <input className='bg-[#14191e80] border-b outline-none border-b-[#ffffff30] h-[50px] w-full px-[15px] rounded-[5px]' type="email" name="email" id="email" placeholder='taofeek@gmail.com' required />
                        </div>
                        <div className="inputs flex flex-col gap-2">
                            <label htmlFor="" className='text-sm font-semibold text-[#ffffffbe]'>Password:</label>
                            <input className='bg-[#14191e80] border-b outline-none border-b-[#ffffff30] h-[50px] w-full px-[15px] rounded-[5px]' type="password" name="password" id="password" minLength={8} placeholder='********' required />
                        </div>
                    </div>
                    <Link href="" className='text-right text-xs text-[#ffffff80]'>Forget Password?</Link>
                    <button className='btn flex items-center gap-2 w-full' type="submit">Login <FaArrowRightLong /></button>
                </form>
            </div>
            <div className="md:block hidden img bg-[url(/images/single1.jpeg)] bg-cover bg-right bg-no-repeat w-full h-[90vh] rounded-[20px]">
                {/* <Image className='w-full h-[90vh] object-cover object-top' src="/images/single1.jpeg" width={100} height={100} alt='login_picture' /> */}
            </div>
        </div>
        <Link href="/" className="home flex items-center gap-2 absolute top-[10px] left-[10px] text-sm px-3 py-1 bg-[#ffffff4b] text-[#ffffff80] border border-[#ffffff30] rounded-full">
            <AiFillHome className='text-lg text-white' /> Go home
        </Link>
    </div>
  )
}

export default page