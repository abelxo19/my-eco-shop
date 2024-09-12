import Image from "next/image"
import C1 from '@/assets/image 999.png'
import C2 from '@/assets/image 1000.png'
import C3 from '@/assets/image 1001.png'
import C4 from '@/assets/image 1002.png'
import C5 from '@/assets/image 1003.png'

const catagory = () => {
  return (
    <div className="grid grid-cols-1 place-items-center lg:grid-cols-6 py-16 mx-8 gap-4">
      <div className="">
        <h1 className="font-bold text-2xl lg:text-[40px] text-[#658C4A]">Category for you</h1>
      </div>
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
      <Image src={C5} alt="" className="rounded-md" />
      </div>
    </div>
  )
}

export default catagory
