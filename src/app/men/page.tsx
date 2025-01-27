import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import BestSellerProducts from '../components/Products/BestSellerProducts'
import NewReleaseProducts from '../components/Products/NewReleaseProducts'

const page = () => {
  return (
    <div className='bg-black'>
        <Navbar />

        <div className="container h-screen">
            <div className="grid grid-cols-5 gap-5">
                <div className="sidebar col-span-1 flex flex-col gap-[20px] h-auto w-full py-5 pt-[100px]">
                    <div className="head">
                        <h6 className='text-[10px] font-bold text-[#ffffff80]'>MEN - ALL</h6>
                        <h1>Shop All</h1>
                    </div>
                    <div className="tops">
                        <h6 className='text-[10px] font-bold text-[#ffffff80]'>TOPS</h6>
                        <ul className='flex flex-col gap-1 border-b border-[#ffffff1c] py-[10px]'>
                            <li className='text-[14px] font-medium h-[25px] px-2 rounded-sm w-full flex items-center hover:bg-[#ffffff1c] hover:text-[#ffffff80]'><Link href="">Tees & Hensley</Link></li>
                            <li className='text-[14px] font-medium h-[25px] px-2 rounded-sm w-full flex items-center hover:bg-[#ffffff1c] hover:text-[#ffffff80]'><Link href="">Polos & Shirts</Link></li>
                            <li className='text-[14px] font-medium h-[25px] px-2 rounded-sm w-full flex items-center hover:bg-[#ffffff1c] hover:text-[#ffffff80]'><Link href="">Sweatshirts & Layers</Link></li>
                            <li className='text-[14px] font-medium h-[25px] px-2 rounded-sm w-full flex items-center hover:bg-[#ffffff1c] hover:text-[#ffffff80]'><Link href="">Outer wear</Link></li>
                            <li className='text-[14px] font-medium h-[25px] px-2 rounded-sm w-full flex items-center hover:bg-[#ffffff1c] hover:text-[#ffffff80]'><Link href="">Long Sleeves</Link></li>
                        </ul>
                    </div>
                    <div className="bottoms">
                        <h6 className='text-[10px] font-bold text-[#ffffff80]'>BOTTOMS</h6>
                        <ul className='flex flex-col gap-1 border-b border-[#ffffff1c] py-[10px]'>
                            <li className='text-[14px] font-medium h-[25px] px-2 rounded-sm w-full flex items-center hover:bg-[#ffffff1c] hover:text-[#ffffff80]'><Link href="">Shorts</Link></li>
                            <li className='text-[14px] font-medium h-[25px] px-2 rounded-sm w-full flex items-center hover:bg-[#ffffff1c] hover:text-[#ffffff80]'><Link href="">Pants & Joggers</Link></li>
                            <li className='text-[14px] font-medium h-[25px] px-2 rounded-sm w-full flex items-center hover:bg-[#ffffff1c] hover:text-[#ffffff80]'><Link href="">Sweetpants</Link></li>
                            <li className='text-[14px] font-medium h-[25px] px-2 rounded-sm w-full flex items-center hover:bg-[#ffffff1c] hover:text-[#ffffff80]'><Link href="">Outer wear</Link></li>
                            <li className='text-[14px] font-medium h-[25px] px-2 rounded-sm w-full flex items-center hover:bg-[#ffffff1c] hover:text-[#ffffff80]'><Link href="">Long Sleeves</Link></li>
                        </ul>
                    </div>
                    <div className="accessories">
                        <h6 className='text-[10px] font-bold text-[#ffffff80]'>ACCESSORIES</h6>
                        <ul className='flex flex-col gap-1 border-b border-[#ffffff1c] py-[10px]'>
                            <li className='text-[14px] font-medium h-[25px] px-2 rounded-sm w-full flex items-center hover:bg-[#ffffff1c] hover:text-[#ffffff80]'><Link href="">Headwear</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="main col-span-4 pt-[100px] h-screen overflow-y-scroll flex flex-col">
                    <div className="tops-products grid md:grid-cols-4 grid-cols-2 gap-x-5 md:gap-y-10 gap-y-5 p-5 border-b border-b-[#ffffff80]">
                        <div className="flex flex-col col-span-2 gap-3">
                            <div className="relative rounded-[10px] w-full h-full bg-[url(/images/mens_shop_all_super_collection.webp)] bg-cover bg-top bg-no-repeat">
                                <Link className='btn absolute bottom-[20px] right-[20px] px-5 bg-white text-[#14191e] hover:text-white border-none rounded-[5px]' href="">Shop all Tops</Link>
                            </div>
                            <p className='text-[14px]'>Renowned for superior fit and premium fabrics, our tees and henleys deliver unmatched versatility. Designed to elevate your style, they take you seamlessly from the workweek to the weekend—ensuring you look and feel your best wherever life takes you.</p>
                        </div>
                        <NewReleaseProducts />
                        <BestSellerProducts />
                        <NewReleaseProducts />
                        <BestSellerProducts />
                        <NewReleaseProducts />
                        <BestSellerProducts />
                    </div>


                    <div className="bottoms-products grid md:grid-cols-4 grid-cols-2 gap-x-5 md:gap-y-10 gap-y-5 p-5 border-b border-b-[#ffffff80]">
                        <BestSellerProducts />
                        <NewReleaseProducts />
                        <div className="flex flex-col col-span-2 gap-3">
                            <div className="relative rounded-[10px] w-full h-full bg-[url(/images/men_bottom.jpg)] bg-cover bg-top bg-no-repeat">
                                <Link className='btn absolute bottom-[20px] right-[20px] px-5 bg-white text-[#14191e] hover:text-white border-none rounded-[5px]' href="">Shop all Bottoms</Link>
                            </div>
                            <p className='text-[14px]'>Renowned for superior fit and premium fabrics, our tees and henleys deliver unmatched versatility. Designed to elevate your style, they take you seamlessly from the workweek to the weekend—ensuring you look and feel your best wherever life takes you.</p>
                        </div>
                        <BestSellerProducts />
                        <NewReleaseProducts />
                        <BestSellerProducts />
                        <NewReleaseProducts />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page