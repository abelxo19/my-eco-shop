import bg1 from '@/assets/commit/pexels-tim-douglas-6567651 1.png'
import Image from 'next/image'

const commit = () => {
  return (
    <div>
      <div className='w-auto relative'>
        <div className='absolute lg:w-full h-full bg-[#658C4A]/90 '><h1 className='text-sm lg:px-24 lg:p-24 text-center font-medium lg:text-3xl pt-4 text-white lg:font-bold font-libre-baskerville'>Shop guilt-free knowing that our eco-friendly e-commerce platform is committed to reducing environmental impact and promoting sustainable practices in every step of the shopping process</h1></div>
        <Image src={bg1} alt='no-bg' className='h-full w-full object-cover' />
      </div>
    </div>
    
  )
}

export default commit
