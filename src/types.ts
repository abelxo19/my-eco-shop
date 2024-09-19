export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    rating: number;
  }
  
  export interface ProductData {
    [category: string]: Product[];
  }
  