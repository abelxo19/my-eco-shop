"use client";
import Image from "next/image";
import Img1 from '../../../public/hero_img.png';
import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf } from "lucide-react"

const Hero = () => {
  return (
      <div className="relative antialiased">
      {/* Background Image for Small Screens */}
      <div className="absolute inset-0 -z-10 bg-[url('/hero_img.png')] bg-cover bg-center md:hidden mt-[-90px] pb-5" style={{ opacity: 0.4 }}></div>
      <div className="flex flex-col lg:flex-row justify-between mx-6 lg:mx-12 mt-10 lg:mt-10">
      {/* Content Section */}
      <motion.div
        className="w-full lg:w-[50%] mt-8 lg:mt-16 text-center lg:text-left relative z-10"
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
          <span className="wellcome">healthy</span> you right now.
        </span>

        <div className="pt-5">
          <Link href="/api/auth/register">
            <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-[#658C4A]/90 px-3 py-1 text-base font-semibold text-white backdrop-blur-3xl">
                Get Started
              </span>
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Image for Larger Screens */}
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
    </div>
  );
}

export default Hero;
