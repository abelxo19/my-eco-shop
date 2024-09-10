import bg1 from '@/assets/commit/pexels-tim-douglas-6567651 1.png'
import Image from 'next/image'

const commit = () => {
  return (
    <div>
      <div className='relative'>
        <div className='absolute w-full h-full bg-[#658C4A]/90 hover:bg-[#658c4a]/10'><h1 className='px-24 p-24 text-center text-[30px] text-white font-bold font-libre-baskerville'>Shop guilt-free knowing that our eco-friendly e-commerce platform is committed to reducing environmental impact and promoting sustainable practices in every step of the shopping process</h1></div>
        <Image src={bg1} alt='no-bg' className='h-full w-full object-cover' />
      </div>
    </div>
    
  )
}

export default commit
