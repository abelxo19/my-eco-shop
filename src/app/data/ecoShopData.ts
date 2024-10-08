type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  rating: number;
};

type EcoShopData = {
  new: Product[];
  clothing: Product[];
  bedding: Product[];
  furniture: Product[];
  accessories: Product[];
};
const ecoShopData : EcoShopData ={
    new: [
      {
        id: 1,
        name: "Eco-Friendly T-shirt",
        price: 25.99,
        imageUrl: "/images/tshirt.jpg",
        description: "Made from 100% organic cotton.",
        rating: 4,
      },
      {
        id: 2,
        name: "Recycled Paper Notebook",
        price: 10.99,
        imageUrl: "/images/notebook.jpg",
        description: "Notebook made from recycled paper.",
        rating: 5,
      },
      {
        id: 3,
        name: "Bamboo Sunglasses",
        price: 45.99,
        imageUrl: "/images/sunglasses.jpg",
        description: "Stylish sunglasses made from bamboo.",
        rating: 4,
      },
      {
        id: 4,
        name: "Eco-Friendly Tote Bag",
        price: 15.99,
        imageUrl: "/images/tote-bag.jpg",
        description: "Reusable tote bag made from organic cotton.",
        rating: 5,
      },
      {
        id: 5,
        name: "Stainless Steel Water Bottle",
        price: 19.99,
        imageUrl: "/images/water-bottle.jpg",
        description: "Durable, reusable water bottle.",
        rating: 4,
      },
      {
        id: 6,
        name: "Compostable Phone Case",
        price: 24.99,
        imageUrl: "/images/phone-case.jpg",
        description: "Phone case made from compostable materials.",
        rating: 3,
      }
    ],
    clothing: [
      {
        id: 11,
        name: "Organic Cotton Hoodie",
        price: 49.99,
        imageUrl: "/images/hoodie.jpg",
        description: "Soft and sustainable hoodie made from organic cotton.",
        rating: 5,
      },
      {
        id: 21,
        name: "Bamboo Fiber Socks",
        price: 12.99,
        imageUrl: "/images/socks.jpg",
        description: "Eco-friendly socks made from bamboo fibers.",
        rating: 5,
      },
      {
        id: 32,
        name: "Recycled Polyester Jacket",
        price: 89.99,
        imageUrl: "/images/jacket.jpg",
        description: "Jacket made from recycled polyester.",
        rating: 4,
      },
      {
        id: 43,
        name: "Organic Cotton Trousers",
        price: 55.99,
        imageUrl: "/images/trousers.jpg",
        description: "Comfortable trousers made from organic cotton.",
        rating: 5,
      },
      {
        id: 54,
        name: "Hemp Beanie",
        price: 29.99,
        imageUrl: "/images/beanie.jpg",
        description: "Warm beanie made from sustainable hemp.",
        rating: 3,
      },
      {
        id: 66,
        name: "Organic Cotton Dress",
        price: 69.99,
        imageUrl: "/images/dress.jpg",
        description: "Elegant dress made from organic cotton.",
        rating: 5,
      }
    ],
    bedding: [
      {
        id: 12,
        name: "Organic Cotton Bed Sheet",
        price: 79.99,
        imageUrl: "/images/bed-sheet.jpg",
        description: "Comfortable bed sheet made from 100% organic cotton.",
        rating: 4,
      },
      {
        id: 23,
        name: "Bamboo Pillowcase Set",
        price: 29.99,
        imageUrl: "/images/pillowcase.jpg",
        description: "Sustainable pillowcase set made from bamboo.",
        rating: 5,
      },
      {
        id: 34,
        name: "Hemp Duvet Cover",
        price: 99.99,
        imageUrl: "/images/duvet-cover.jpg",
        description: "Luxurious duvet cover made from hemp.",
        rating: 5,

      },
      {
        id: 45,
        name: "Recycled Down Comforter",
        price: 149.99,
        imageUrl: "/images/comforter.jpg",
        description: "Comforter filled with recycled down.",
        rating: 5,
      },
      {
        id: 56,
        name: "Organic Linen Throw Blanket",
        price: 59.99,
        imageUrl: "/images/throw-blanket.jpg",
        description: "Cozy throw blanket made from organic linen.",
        rating: 3,
      },
      {
        id: 67,
        name: "Recycled Cotton Mattress Topper",
        price: 129.99,
        imageUrl: "/images/mattress-topper.jpg",
        description: "Comfortable mattress topper made from recycled cotton.",
        rating: 5,
      }
    ],
    furniture: [
      {
        id: 1,
        name: "Reclaimed Wood Coffee Table",
        price: 199.99,
        imageUrl: "/images/coffee-table.jpg",
        description: "Beautiful coffee table made from reclaimed wood.",
        rating: 3,
      },
      {
        id: 2,
        name: "Bamboo Bookshelf",
        price: 149.99,
        imageUrl: "/images/bookshelf.jpg",
        description: "Eco-friendly bookshelf made from bamboo.",
        rating: 5,
      },
      {
        id: 3,
        name: "Recycled Plastic Chair",
        price: 89.99,
        imageUrl: "/images/chair.jpg",
        description: "Chair made from recycled plastic materials.",
        rating: 2,
      },
      {
        id: 4,
        name: "Sustainable Oak Dining Table",
        price: 499.99,
        imageUrl: "/images/dining-table.jpg",
        description: "Elegant dining table made from sustainable oak.",
        rating: 5,
      },
      {
        id: 5,
        name: "Recycled Steel Desk",
        price: 249.99,
        imageUrl: "/images/desk.jpg",
        description: "Modern desk made from recycled steel.",
        rating: 5,
      },
      {
        id: 6,
        name: "Cork Side Table",
        price: 119.99,
        imageUrl: "/images/side-table.jpg",
        description: "Unique side table made from cork material.",
        rating: 4,
      }
    ],
    accessories: [
      {
        id: 1,
        name: "Recycled Leather Wallet",
        price: 29.99,
        imageUrl: "/images/wallet.jpg",
        description: "Stylish wallet made from recycled leather.",
        rating: 4,
      },
      {
        id: 2,
        name: "Eco-Friendly Sunglasses",
        price: 45.99,
        imageUrl: "/images/sunglasses.jpg",
        description: "Sunglasses made from sustainable materials.",
        rating: 5,
      },
      {
        id: 3,
        name: "Recycled Cotton Tote Bag",
        price: 19.99,
        imageUrl: "/images/tote-bag.jpg",
        description: "Durable tote bag made from recycled cotton.",
        rating: 5,
      },
      {
        id: 4,
        name: "Compostable Phone Case",
        price: 24.99,
        imageUrl: "/images/phone-case.jpg",
        description: "Phone case made from compostable materials.",
        rating: 4,
      },
      {
        id: 5,
        name: "Recycled Plastic Watch",
        price: 59.99,
        imageUrl: "/images/watch.jpg",
        description: "Watch made from recycled plastic.",
        rating: 5,
      },
      {
        id: 6,
        name: "Hemp Bracelet",
        price: 12.99,
        imageUrl: "/images/bracelet.jpg",
        description: "Stylish bracelet made from hemp fibers.",
        rating: 3,
      }
    ]
  };
  
  export default ecoShopData;
  