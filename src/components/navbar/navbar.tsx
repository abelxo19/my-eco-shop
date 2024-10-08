import Eco_logo from '@/assets/eco.png';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  return (
    <div className="shadow-sm">
      <div className="py-3 mx-12 flex justify-between items-center mr-20 antialiased">
        <Link href="/">
          <Image src={Eco_logo} alt="logo_image" className="w-10 h-7 lg:h-8 lg:w-14" />
        </Link>

        <div className="flex justify-end">
          {user ? (
            <>
              {isAdmin ? (
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}
                >
                  Dashboard ✨
                </Link>
              ) : null}
               <div className="relative z-50 ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="h-9 ml-5 items-center">
                    <AvatarImage src="/founder.jpg" />
                    <AvatarFallback>AA</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2 z-[60]"> 
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/wishlist">Wishlist</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/cart">Cart</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/api/auth/logout">Log out</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/api/auth/register"
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                Sign up
              </Link>

              <Link
                href="/api/auth/login"
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                })}
              >
                Login
              </Link>

              <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
