import { Button } from "@/components/ui/button";
import prisma from "@/app/lib/db";

export default function SeedDatabase() {
  async function postData() {
    "use server";
    await prisma.clothing.createMany({
      data: [
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
});
}

  return (
    <div className="m-5">
      <form action={postData}>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}