"use client";
import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the structure of the product and the context state
interface WishlistContextType {
  wishlist: number[];
  addToWishlist: (id: number) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
}

// Create the context with default values
export const WishlistContext = createContext<WishlistContextType>({
  wishlist: [],
  addToWishlist: () => {},
  removeFromWishlist: () => {},
  isInWishlist: () => false,
});

// Create a provider component
export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<number[]>(getWishlistFromLocalStorage());

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    saveWishlistToLocalStorage(wishlist);
  }, [wishlist]);

  const addToWishlist = (id: number) => {
    setWishlist((prev) => [...prev, id]);
  };

  const removeFromWishlist = (id: number) => {
    setWishlist((prev) => prev.filter((productId) => productId !== id));
  };

  const isInWishlist = (id: number) => {
    return wishlist.includes(id);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Helper functions to manage wishlist in localStorage
function getWishlistFromLocalStorage(): number[] {
  const storedWishlist = localStorage.getItem('wishlist');
  return storedWishlist ? JSON.parse(storedWishlist) : [];
}

function saveWishlistToLocalStorage(wishlist: number[]) {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}