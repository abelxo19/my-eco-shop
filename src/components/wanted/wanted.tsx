import Image from "next/image"
import W1 from '@/assets/image 976.png'
import W2 from '@/assets/image 978.png'
import W3 from '@/assets/image 979.png'
import W4 from '@/assets/image 980.png'

const wanted = () => {
  return (
    <div className="bg-[#658C4A] pt-10 pb-14">
      <div>
        <h1 className="font-libre-baskerville font-bold text-[48px] text-white text-center">Our Most Wanted Products</h1>
        <p className="text-sm text-[#E6E6E6] text-center">Good for environment, good for you</p>
      </div>
      <div className="grid grid-cols-4 gap-4 mx-8 pt-6">
        <div className="">
          <Image src={W1} alt="" className="rounded-md" />
          <h1 className="text-sm text-white">Alpine Provisions | Cedar + <span className="block">Sandalwood Hand Soap</span></h1>
          <p className="font-semibold text-xs text-white pt-1">Rp99.900</p>
          <p className="font-semibold text-xs line-through text-white">Rp259.000</p>
        </div>
        <div>
          <Image src={W2} alt="" className="rounded-md" />
          <h1 className="text-sm text-white">Women&#39;s Classic Sole Low Back <span className="block">Wool Slippers</span></h1>
          <p className="font-semibold text-xs text-white pt-1">Rp79.900</p>
          <p className="font-semibold text-xs line-through text-white">Rp159.000</p>
        </div>
        <div>
          <Image src={W3} alt="" className="rounded-md" />
          <h1 className="text-sm text-white">Large Patterned Hamper Basket</h1>
          <p className="font-semibold text-xs text-white pt-1">Rp199.900</p>
          <p className="font-semibold text-xs line-through text-white">Rp329.000</p>
        </div>
        <div>
          <Image src={W4} alt="" className="rounded-md" />
          <h1 className="text-sm text-white">Meliora | Eco Laundry Powder</h1>
          <p className="font-semibold text-xs text-white pt-1">Rp159.900</p>
          <p className="font-semibold text-xs line-through text-white">Rp259.000</p>
        </div>
      </div>
    </div>
  )
}

export default wanted
