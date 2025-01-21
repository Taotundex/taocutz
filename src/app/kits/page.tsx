import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import BestSellerProducts from '../components/Products/BestSellerProducts'
import NewReleaseProducts from '../components/Products/NewReleaseProducts'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div className='bg-black'>
        <Navbar />

        <div className="container">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-[25px] py-[100px]">
                <div className="w-full md:h-[650px] h-[400px] relative bg-[url(/images/men-kits.jpg)] bg-cover bg-no-repeat bg-center rounded-[10px]">
                    <div className="absolute bottom-10 left-[50%] translate-x-[-50%] flex flex-col gap-5 text-center">
                        <h3 className='md:text-[40px] text-[35px] font-black w-max'>Men's Kits</h3>
                        <Link className='btn w-fit px-7 mx-auto bg-white text-[#14191e] hover:text-white' href="mens">Shop Now</Link>
                    </div>
                </div>
                <div className="w-full md:h-[650px] h-[400px] relative bg-[url(/images/women-kits.webp)] bg-cover bg-no-repeat bg-center rounded-[10px]">
                    <div className="absolute bottom-10 left-[50%] translate-x-[-50%] flex flex-col gap-5 text-center">
                        <h3 className='md:text-[40px] text-[35px] font-black w-max'>Women's Kits</h3>
                        <Link className='btn w-fit px-7 mx-auto bg-white text-[#14191e] hover:text-white' href="mens">Shop Now</Link>
                    </div>
                </div>
            </div>


            <div className="best-offer">
                <div className="head flex flex-col gap-2 text-center leading-6">
                    <h6 className='text-[10px]'>OUR BEST OFFER</h6>
                    <h1 className='font-black md:text-[35px] text-[30px]'>Shop Our Kits</h1>
                </div>
                <div className="best-products py-10 grid md:grid-cols-4 grid-cols-2 gap-[15px]">
                    <BestSellerProducts />
                    <NewReleaseProducts />
                    <BestSellerProducts />
                    <NewReleaseProducts />
                    <BestSellerProducts />
                    <NewReleaseProducts />
                    <BestSellerProducts />
                    <NewReleaseProducts />
                </div>
            </div>

            <div className="best-selling-pack">
                <div className="flex items-center justify-between h-[75px] w-full border-b-2 border-b-[#ffffff1c]">
                    <h3 className="font-black lg:text-[35px] md:text-[30px] text-[20px]">Shop Best-Selling Packs</h3>
                    <Link href="men" className='btn bg-white text-[#14191e] hover:text-white px-5 h-[45px] w-max'>Shop Men's Bundles</Link>
                </div>
                <div className="best-selling-pack-products py-10 grid md:grid-cols-5 grid-cols-2 gap-[15px]">
                    <NewReleaseProducts />
                    <BestSellerProducts />
                    <NewReleaseProducts />
                    <BestSellerProducts />
                    <NewReleaseProducts />
                </div>
            </div>

            <div className="best-selling-pack">
                <div className="flex items-center justify-between h-[75px] w-full border-b-2 border-b-[#ffffff1c]">
                    <h3 className="font-black lg:text-[35px] md:text-[30px] text-[20px]">Best Selling Kits</h3>
                    <Link href="men" className='btn bg-white text-[#14191e] hover:text-white px-5 h-[45px] w-max'>Shop Kits</Link>
                </div>
                <div className="best-selling-pack-products py-10 grid md:grid-cols-5 grid-cols-2 gap-[15px] justify-center">
                    <BestSellerProducts />
                    <NewReleaseProducts />
                    <BestSellerProducts />
                    <NewReleaseProducts />
                    <BestSellerProducts />
                </div>
            </div>
        </div>


        <Footer />
    </div>
  )
}

export default page