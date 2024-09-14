"use client";
import React, { useContext } from 'react';
import ecoShopData from '../data/ecoShopData';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { WishlistContext } from '../../context/WishlistContext';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
}

const WishlistPage: React.FC = () => {
  const { wishlist } = useContext(WishlistContext);

  // Filter products that are in the wishlist from each category
  const wishlistProducts = ecoShopData.new.filter((product: Product) =>
    wishlist.includes(product.id)
  );
  const wishlistProducts_2 = ecoShopData.clothing.filter((product: Product) =>
    wishlist.includes(product.id)
  );
  const wishlistProducts_3 = ecoShopData.bedding.filter((product: Product) =>
    wishlist.includes(product.id)
  );

  // Combine all wishlist products from different categories into one array
  const combinedWishlistProducts = [
    ...wishlistProducts,
    ...wishlistProducts_2,
    ...wishlistProducts_3,
  ];

  // If the combined wishlistProducts array is empty, show a message
  if (combinedWishlistProducts.length === 0) {
    return <p className="text-center mt-8">Your wishlist is empty.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">My Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {combinedWishlistProducts.map((product: Product) => (
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

export default WishlistPage;
