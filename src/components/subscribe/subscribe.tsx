import Image from "next/image"
import bg2 from '@/assets/image 1004.png'

const subscribe = () => {
  return (
    <div>
       <div>
        <div className='relative'>
          <div className='absolute rounded-3xl bg-white mt-[265px] ml-11 px-5 py-10 w-[500px]'>
            <h1 className='text-[18px] text-[#333333] font-semibold'>Subscribe to our newsletter</h1>
            <p className="text-gray-500 text-[18px] pt-2">Be the first to know about exclusive offers, eco-tips, and new arrivals!</p>
            <button className="absolute mt-[17.5px] ml-[341px] px-6 py-2 bg-[#658C4A] rounded-full text-white font-semibold hover:bg-white hover:text-[#658C4A]">Subscribe</button>              
            <input
            className="border border-slate-300 rounded-3xl px-4 py-[12.8px] text-xs placeholder:text-[#666666] mt-4 w-full focus:outline-none"
            placeholder="Your email" />
          </div>
          <div className="">
          <Image src={bg2} alt='no-bg' className='h-auto' />
          </div>
        </div>
       </div>
    </div>
  )
}

export default subscribe
