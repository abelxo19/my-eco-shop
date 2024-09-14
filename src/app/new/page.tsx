"use client";
import React, { useContext } from 'react';
import ecoShopData from '../data/ecoShopData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { WishlistContext } from '../../context/WishlistContext';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
}

const NewProductsPage: React.FC = () => {
  const text = "New Arrivals";
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className='flex justify-center pb-8'>
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.1,
            }} className='text-xl md:text-3xl lg:text-5xl'
          >
            {letter}
          </motion.span>
        ))}
      </div>      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecoShopData.new.map((product: Product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md h-[26rem] relative">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={400}
              className="mb-4 h-2/3 w-full"
            />

            <h2 className="text-xl text-center font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600 text-center pt-1">${product.price}</p>

            <div className="flex justify-center items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`h-4 w-3 ${
                    index < product.rating ? 'fill-yellow-500 text-yellow-500' : 'text-gray-300'
                  } inline-flex`}
                />
              ))}
            </div>

            <button
              onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product.id)}
              className="absolute top-4 right-4 p-2 rounded-full focus:outline-none hover:bg-gray-100"
              aria-label="Add to wishlist"
            >
              <Heart
                className={`h-6 w-6 ${
                  isInWishlist(product.id) ? 'fill-red-500 text-red-500 ' : 'text-orange-600'
                }`}
              />
            </button>

            <Link
              href="/configure/upload"
              className="bg-[#658C4A] text-white w-16 py-1 pl-2 rounded flex ml-[42%] items-center gap-1 mt-2 hover:font-semibold"
            >
              Buy
              <ArrowRight className="h-4 w-5" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewProductsPage;
