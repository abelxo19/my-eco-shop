export const setWishlistSession = (wishlist: number[]): void => {
    sessionStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
  
  export const getWishlistSession = (): number[] => {
    const session = sessionStorage.getItem('wishlist');
    return session ? JSON.parse(session) : [];
  };
  
  export const removeWishlistSession = (): void => {
    sessionStorage.removeItem('wishlist');
  };
  