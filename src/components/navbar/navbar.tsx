import { ArrowRight } from "lucide-react"
import { Search } from 'lucide-react';
import Eco_logo from '@/assets/eco.png'
import Cart from '@/assets/cart.png'
import Person from '@/assets/person.png'
import Image from "next/image"
import Link from "next/link";

const navbar = () => {
  return (
    <div className="sticky top-0 z-20 bg-white">
       <div className="flex justify-center items-center bg-[#658C4A] py-2">
       <h1 className="font-semibold text-white text-[16px] tracking-tight">Free Shipping with minimum purchase Rp250.000</h1>
       <ArrowRight className="ml-2 w-4 text-white"/>
       </div>
       <div className="py-3 mx-8 flex justify-between">
        <Image src={Eco_logo} width={68} height={35} alt="logo_image" className="" />
        <div className="relative">
        <input 
        placeholder="search here..."
        className="border border-slate-300 rounded-3xl px-8 py-2 w-[545px] focus:outline-none"
        />
        <Search className="absolute inline-flex ml-[-540px] mt-2 text-slate-500"/>
        </div>
        <div className="flex gap-5">
        <Image src={Cart} alt="no_image" className="h-7"/>
        <Image src={Person} alt="no_image" className="h-7" />
        </div>
       </div>
       <div className="py-1">
        <ul className="flex justify-center gap-4">
            <li className="text-[14px] font-semibold tracking-tighter text-[#333333] hover:bg-[#658C4A] hover:text-white"><Link href='/new'>NEW!</Link></li>
            <li className="text-[14px] font-semibold tracking-tighter text-[#333333] hover:bg-[#658C4A] hover:text-white"><Link href='/clothing'>Clothing</Link></li>
            <li className="text-[14px] font-semibold tracking-tighter text-[#333333] hover:bg-[#658C4A] hover:text-white"><Link href='/bath'></Link>Bath</li>
            <li className="text-[14px] font-semibold tracking-tighter text-[#333333] hover:bg-[#658C4A] hover:text-white"><Link href='/bedding'>Bedding</Link></li>
            <li className="text-[14px] font-semibold tracking-tighter text-[#333333] hover:bg-[#658C4A] hover:text-white"><Link href='/furniture'>Furniture</Link></li>
            <li className="text-[14px] font-semibold tracking-tighter text-[#333333] hover:bg-[#658C4A] hover:text-white"><Link href='/footwear'>Footwear</Link></li>
        </ul>
       </div>
       <hr className="border-[#658C4A]/75"></hr>
    </div>
  )
}

export default navbar
