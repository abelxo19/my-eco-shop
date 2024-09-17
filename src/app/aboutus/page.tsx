"use client";
import Image from 'next/image';
import About from'../../../public/about/about.png'
import About_2 from'../../../public/about/about_2.png'
import Founder from '../../../public/founder.jpg'
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  return (
    <div className='bg-gray-100'>
    <div className=" mx-auto">
      <Image src={About} alt='no' className='hidden lg:block h-[525px] '/>
      <Image src={About_2} alt='no' className='lg:hidden md:h-[400px] h-[325px] '/>
      <header className="text-center mb-8 lg:w-1/2 grid grid-cols-1 mt-24 lg:ml-96 mx-8">
        <h1 className="text-2xl lg:text-4xl font-medium mb-2 place-self-start">About <span className='text-white bg-[#658C4A] px-2'>Us</span></h1>
        <p className="text-sm lg:text-base text-left place-self-start pt-1">
        Eco Shop was founded in 2023 with a vision to make sustainable living accessible to all. What started with a small collection of eco-friendly products has now grown into a thriving platform offering hundreds of environmentally conscious goods to customers around the world.
From reusable cutlery and sustainable clothing to eco-friendly home goods, Every day,our customers make a difference by choosing products that reduce waste and promote a greener lifestyle.
Our community of eco-conscious individuals continues to grow, and together.
        </p>
      </header>
      <section className="mb-8 bg-white pt-6">
        <div className="">
          <div className="p-3 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-center ">Founder</h2>
          <motion.div whileHover={{
            x: 0,
            y: 0,
            scale: 1.15,
            rotate: 0,
          }}>
            <Image src={Founder} alt="Team Member Name" className="rounded-lg mb-4 w-44 h-36 md:w-[300px] md:h-[250px]" />
          </motion.div>
            <h3 className="text-sm md:text-lg lg:text-xl font-semibold mb-2">Abel Atkelet</h3>
            <p className="text-gray-600 text-sm">Founder & CEO</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default AboutUsPage;
