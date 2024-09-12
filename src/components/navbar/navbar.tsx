import { ArrowRight } from "lucide-react"
import { Search } from 'lucide-react';
import Eco_logo from '@/assets/eco.png'
import Image from "next/image"
import { buttonVariants } from '@/components/ui/button'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';

const navbar = async() => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  const isAdmin = user?.email === process.env.ADMIN_EMAIL

  return (
    <div>
       <div className="flex justify-center items-center bg-[#658C4A] py-2">
       <h1 className="font-semibold text-white text-xs md:text-sm lg:text-[16px] tracking-tight">Free Shipping with minimum purchase Rp250.000</h1>
       <ArrowRight className="ml-2 w-4 text-white"/>
       </div>
       <div className="py-3 mx-12 flex justify-between">
        <Link href='/'>
        <Image src={Eco_logo} width={68} height={35} alt="logo_image" className="" />
        </Link>
       
        <div className="flex justify-end ">
         {user ? (
              <>
                 {isAdmin ? (
                  <Link
                    href='/dashboard'
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })}>
                    Dashboard ✨
                  </Link>
                  
                ) : null}
                <Link
                  href='/api/auth/logout'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Sign out
                </Link>
                <Link href='/cart'
                  className="ml-3"
                >
                  <ShoppingCart className="h-7" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href='/api/auth/register'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Sign up
                </Link>

                <Link
                  href='/api/auth/login'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Login
                </Link>

                <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

              </>
            )}
        </div>
       </div>
    </div>
  )
}

export default navbar
