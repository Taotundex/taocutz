import Image from 'next/image'
import React from 'react'
import { FiPlus } from 'react-icons/fi'

const BestSellerProducts = () => {
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3">
            <div className="cloth-card w-full">
                <Image className="w-full h-[400px] object-cover" src="/images/product1.jpg" width={100} height={100} alt="product" />
                <div className="details">
                <div className="det flex flex-col py-2">
                    <span className="text-[12px] font-[400]">WHITE</span>
                    <h5 className="font-semibold text-xl">AO Curve-Hem Tee</h5>
                    <p className="price font-normal text-lg">$12345</p>
                </div>
                <button className="btn bg-transparent text-white border-transparent hover:bg-white hover:text-black flex items-center justify-center gap-2 w-full rounded-none ">
                    <FiPlus />
                    Quick Add
                </button>
                </div>
            </div>
            <div className="cloth-card w-full">
                <Image className="w-full h-[400px] object-cover" src="/images/product2.jpg" width={100} height={100} alt="product" />
                <div className="details">
                    <div className="det flex flex-col py-2">
                    <span className="text-[12px] font-[400]">BLACK</span>
                    <h5 className="font-semibold text-xl">AO Jogger</h5>
                    <p className="price font-normal text-lg">$89345</p>
                    </div>
                    <button className="btn bg-transparent text-white border-transparent hover:bg-white hover:text-black flex items-center justify-center gap-2 w-full rounded-none ">
                    <FiPlus />
                    Quick Add
                    </button>
                </div>
            </div>
            <div className="cloth-card w-full">
                <Image className="w-full h-[400px] object-cover" src="/images/product1.jpg" width={100} height={100} alt="product" />
                <div className="details">
                <div className="det flex flex-col py-2">
                    <span className="text-[12px] font-[400]">WHITE</span>
                    <h5 className="font-semibold text-xl">AO Curve-Hem Tee</h5>
                    <p className="price font-normal text-lg">$12345</p>
                </div>
                <button className="btn bg-transparent text-white border-transparent hover:bg-white hover:text-black flex items-center justify-center gap-2 w-full rounded-none ">
                    <FiPlus />
                    Quick Add
                </button>
                </div>
            </div>
            <div className="cloth-card w-full">
                <Image className="w-full h-[400px] object-cover" src="/images/product2.jpg" width={100} height={100} alt="product" />
                <div className="details">
                    <div className="det flex flex-col py-2">
                    <span className="text-[12px] font-[400]">BLACK</span>
                    <h5 className="font-semibold text-xl">AO Jogger</h5>
                    <p className="price font-normal text-lg">$89345</p>
                    </div>
                    <button className="btn bg-transparent text-white border-transparent hover:bg-white hover:text-black flex items-center justify-center gap-2 w-full rounded-none ">
                    <FiPlus />
                    Quick Add
                    </button>
                </div>
            </div>
            <div className="cloth-card w-full">
                <Image className="w-full h-[400px] object-cover" src="/images/product1.jpg" width={100} height={100} alt="product" />
                <div className="details">
                <div className="det flex flex-col py-2">
                    <span className="text-[12px] font-[400]">WHITE</span>
                    <h5 className="font-semibold text-xl">AO Curve-Hem Tee</h5>
                    <p className="price font-normal text-lg">$12345</p>
                </div>
                <button className="btn bg-transparent text-white border-transparent hover:bg-white hover:text-black flex items-center justify-center gap-2 w-full rounded-none ">
                    <FiPlus />
                    Quick Add
                </button>
                </div>
            </div>
        </div>
    )
}

export default BestSellerProducts
