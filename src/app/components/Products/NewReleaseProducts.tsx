import Image from 'next/image'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

const NewReleaseProducts = () => {
  return (
    <div className="cloth-card w-full">
        <Image className="w-full md:h-[350px] h-[250px] object-cover rounded-[10px]" src="/images/product4.webp" width={100} height={100} alt="product" />
        <div className="details">
            <div className="det flex flex-col py-2">
                <span className="text-[12px] font-[400]">STEEL</span>
                <h5 className="font-semibold text-xl">Mogul Jacket</h5>
                <p className="price font-normal text-lg">$298890</p>
            </div>
            <button className="btn bg-transparent text-white border-transparent hover:bg-white hover:text-black flex items-center justify-center gap-2 w-full rounded-[5px] ">
                <FiPlus />
                Quick Add
            </button>
        </div>
    </div>
  )
}

export default NewReleaseProducts
