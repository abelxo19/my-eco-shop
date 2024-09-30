import Ship from'@/assets/why us/ship_2.png'
import S from'@/assets/why us/statify.png'
import Eco from '@/assets/why us/eco_f.png'
import Fast from '@/assets/why us/fast.png'
import Image from 'next/image'
const bought = () => {
  return (
    <div className="mx-12 md:mx-28 pb-28">
      <div className="p-7 lg:pt-28 lg:pb-9">
        <h1 className="font-semibold lg:font-bold font-libre-baskerville text-lg lg:text-5xl text-center text-[#658C4A]pb-">Why <span className='bg-[#658C4A] text-white px-2 py-1'>Bought</span> From Us?</h1>
      </div>
      <div className='grid grid-cols-1 gap-7 lg:grid-cols-4 mt-6'>
        <div className='w-2/3 place-self-center'>
            <Image src={Ship} alt='no_image' className='h-24' />
            <h3 className='font-semibold text-sm'>Free Shipping</h3>
            <p className='text-sm text-[#666666]'>Shop now and enjoy free shipping on all orders</p>
        </div>
        <div className='w-2/3 place-self-center'>
            <Image src={S} alt='no_image' className=' h-24 pt-3' />
            <h3 className='font-semibold text-sm'>Satisfaction Guaranteed</h3>
            <p className='text-sm text-[#666666]'>Our satisfaction guarantee ensures quality products</p>
        </div>
        <div className='w-2/3 place-self-center'>
            <Image src={Eco} alt='no_image' className='h-24 pt-3 mb-4' />
            <h3 className='font-semibold text-sm'>Eco Friendly Packaging</h3>
            <p className='text-sm text-[#666666]'>Using eco-friendly materials, sustainable and biodegradable.</p>
        </div>
        <div className='w-2/3 place-self-center'>
            <Image src={Fast} alt='no_image' className=' h-24 pt-3 mb-4' />
            <h3 className='font-semibold text-sm'>Fast Response</h3>
            <p className='text-sm text-[#666666]'>24/7 fast and reliable assistance whenever you need it</p>
        </div>
      </div>
    </div>
  )
}

export default bought
