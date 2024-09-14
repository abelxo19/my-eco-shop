import { ArrowRight } from "lucide-react"
import { Search } from 'lucide-react';
import Eco_logo from '@/assets/eco.png'
import Image from "next/image"
import { buttonVariants } from '@/components/ui/button'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import  Wish from '../../../public/favorite.png'
import { X } from 'lucide-react';

const navbar = async() => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  const isAdmin = user?.email === process.env.ADMIN_EMAIL

  return (
    <div>
        <div className="py-3 mx-12 flex justify-between">
        <Link href='/'>
        <Image src={Eco_logo} alt="logo_image" className="w-10 h-7 lg:h-8 lg:w-14" />
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
                <Link href='/wishlist'
                  className="ml-5"
                >
                  <Image src={Wish} alt="no" className="h-8 w-9" />
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
