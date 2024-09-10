import Image from "next/image"
import Img1 from '@/assets/hero_img.png'
const hero = () => {
  return (
    <div className="flex justify-between">
    <div className="ml-20 w-1/3 mt-16">
     <h1 className="font-bold text-[50px] text-[#292929]">Healthy cutlery,<span className="block ml-6 mt-[-15px] tracking-tight">healthy body</span></h1>
     <p className="text-[18px] text-[#666666] ml-4 pt-3">Upgrade your dining experience and</p>
     <span className="block text-[18px] text-[#666666]"> 
     begin your path to a healthy you right now.</span>
     <div className="ml-24 pt-5">
     <button className="text-sm bg-[#658C4A] rounded-full px-4 py-2 tracking-tight text-white hover:text-[#658C4A] hover:bg-transparent">Learn More</button>
     </div>
    </div>
    <div className="w-1/2">
        <Image src={Img1} alt="no-img" className="h-[390px]" />
    </div>
    </div>
  )
}

export default hero
