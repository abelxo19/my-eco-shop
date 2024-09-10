import Image from "next/image"
import bg2 from '@/assets/image 1004.png'

const subscribe = () => {
  return (
    <div>
       <div>
        <div className='relative'>
          <div className='absolute rounded-3xl bg-white mt-48 ml-11 px-5 py-10 w-[500px]'>
            <h1 className='text-[18px] text-[#333333] font-semibold'>Subscribe to our newsletter</h1>
            <p className="text-gray-500 text-[18px] pt-2">Be the first to know about exclusive offers, eco-tips, and new arrivals!</p>
            <input
            className="border border-slate-300 rounded-3xl px-4 py-2 text-xs placeholder:text-[#666666] mt-4 w-full"
            placeholder="Your email" />
          </div>
          <Image src={bg2} alt='no-bg' className='' />
        </div>
       </div>
    </div>
  )
}

export default subscribe
