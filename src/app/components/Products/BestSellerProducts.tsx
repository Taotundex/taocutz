import Image from 'next/image'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

const BestSellerProducts = () => {
    return (
        <div className="cloth-card w-full">
            <Image className="w-full md:h-[350px] h-[250px] object-cover rounded-[10px]" src="/images/product1.jpg" width={100} height={100} alt="product" />
            <div className="details">
                <div className="det flex flex-col py-2">
                    <span className="text-[10px] font-[400]">WHITE</span>
                    <h5 className="font-semibold md:text-xl text-base">AO Curve-Hem Tee</h5>
                    <p className="price font-normal md:text-lg text-sm">$12345</p>
                </div>
                <button className="btn bg-transparent text-white border-transparent hover:bg-white hover:text-black flex items-center justify-center gap-2 w-full rounded-[5px] ">
                    <FiPlus />
                    Quick Add
                </button>
            </div>
        </div>
    )
}

export default BestSellerProducts
