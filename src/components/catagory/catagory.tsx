"use client";
import Image from "next/image"
import C1 from '@/assets/image 999.png'
import C2 from '@/assets/image 1000.png'
import C3 from '@/assets/image 1001.png'
import C4 from '@/assets/image 1002.png'
import C5 from '@/assets/image 1003.png'
import Curl from '../../assets/catagory/why.png'
const catagory = () => {
  return (
    <div className="mb-12">
    <div className="mx-10 mt-12 flex justify-center items-center pb-5">
        <Image src={Curl} alt="no" className=" hidden lg:block absolute ml-[-335px] h-14 w-[90px] opacity-60 mt-[-20px]" />
        <h1 className="font-bold font-libre-baskerville text-xl lg:text-[46px] text-[#658C4A] max-sm:text-center ml-11">Category for <span className="bg-[#658C4a] text-white px-2">You</span></h1> 
      </div>
    <div className="grid grid-cols-2 place-items-center lg:grid-cols-5 pb-5 mt-8 mx-16 gap-8">
      <div className="relative">
      <span className="absolute mt-36 ml-9 font-semibold text-xs px-4 py-2 bg-[#333333] rounded-full text-white hover:bg-[#658C4A] hover:text-white">Clothing</span>
      <Image src={C1} alt="" className="rounded-md" />
      </div>
      <div>
      <span className="absolute mt-36 ml-9 font-semibold text-xs px-4 py-2 bg-[#333333] rounded-full text-white hover:bg-[#658C4A] hover:text-white">Home Goods</span>
      <Image src={C4} alt="" className="rounded-md" />
      </div>
      <div>
      <span className="absolute mt-36 ml-9 font-semibold text-xs px-4 py-2 bg-[#333333] rounded-full text-white hover:bg-[#658C4A] hover:text-white">Bedding</span>
      <Image src={C2} alt="" className="rounded-md" />
      </div>
      <div>
      <span className="absolute mt-36 ml-9 font-semibold text-xs px-4 py-2 bg-[#333333] rounded-full text-white hover:bg-[#658C4A] hover:text-white">Furniture</span>
      <Image src={C3} alt="" className="rounded-md" />
      </div>
      <div>
      <span className="absolute mt-36 ml-9 font-semibold text-xs px-4 py-2 bg-[#333333] rounded-full text-white hover:bg-[#658C4A] hover:text-white">Accessories</span>
      <Image src={C5} alt="" className="rounded-md " />
      </div>
      </div>
      </div>
  ) 
}

export default catagory
