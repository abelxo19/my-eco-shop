"use client";
import Image from "next/image";
import Img1 from '@/assets/hero_img.png';
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between mx-6 lg:mx-12 mt-10 lg:mt-10">
      <motion.div
        className="w-full lg:w-[50%] mt-8 lg:mt-16 text-center lg:text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 pb-4 lg:mb-4">
          Healthy Cutlery,
        </h1>
        <span className="font-bold text-3xl md:text-4xl lg:text-[60px] bg-[#658C4A] text-white px-1">
          Healthy
        </span>
        <span className="pl-2 text-gray-900 text-3xl md:text-4xl lg:text-[60px] font-bold">
          Body
        </span>
        <span className="block mt-4 text-base sm:text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance">
          Upgrade your dining experience and begin your path to a{' '}
          <span className="font-semibold">healthy</span> you right now.
        </span>
        <div className="pt-5">
          <Link href="/api/auth/register">
            <button className="text-sm sm:text-base bg-[#658C4A] rounded-md px-4 py-2 tracking-tight text-white hover:text-[#658C4A] hover:bg-white hover:border border-[#658c4a] hover:font-semibold">
              Get started
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:flex w-full lg:w-[47%] pt-6 justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Image src={Img1} alt="no-img" className="h-[200px] md:h-[300px] lg:h-[390px]" />
      </motion.div>
    </div>
  );
}

export default Hero;
