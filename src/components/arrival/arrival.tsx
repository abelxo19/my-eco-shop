"use client";
import { MoveRight, MoveLeft } from "lucide-react";
import { useState } from "react";
import A1 from '@/assets/arrival/image 989.png';
import A2 from '@/assets/arrival/image 990.png';
import A3 from '@/assets/arrival/image 991.png';
import A4 from '@/assets/arrival/image 992.png';
import A5 from '@/assets/arrival/image 995 (1).png';
import A6 from '@/assets/arrival/image 996 (1).png';
import A7 from '@/assets/arrival/image 997 (1).png';
import Image from "next/image";

const Arrival = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide position

  const cards = [
    { img: A1, title: "Lollygagger Recycled Lounge Chair", description: "Rp699.900" },
    { img: A2, title: "Lollygagger Recycled Lounge Chair", description: "Rp999.900" },
    { img: A3, title: "Nisswa Recycled Loveseat", description: "Rp1.399.900" },
    { img: A4, title: "Lollygagger Recycled Outdoor Chaise", description: "Rp1.199.900" },
    { img: A5, title: "Recycled Cubby Bench", description: "Rp1.159.900" },
    { img: A6, title: "Fresh Air Recycled Table", description: "Rp999.000" },
    { img: A7, title: "Fresh Air Recycled Table", description: "Rp999.000" },
  ];

  const visibleCards = 4; // Show 4 cards at a time
  const cardWidth = 25; // Each card takes up 25% of the total width
  const maxIndex = Math.max(0, cards.length - visibleCards); // Ensure maxIndex is not negative

  // Move to the next set of cards
  const handleMoveRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Move to the previous set of cards
  const handleMoveLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="mx-8 pt-10 pb-16">
      <div className="flex justify-between">
        <div>
          <h1 className="font-libre-baskerville text-[40px] font-bold">
            New Arrival
          </h1>
          <p className="text-xs text-[#666666]">
            Be the first to have the first-class product
          </p>
        </div>
        <div className="flex gap-3 items-center">
          <div
            onClick={handleMoveLeft}
            className={`bg-gray-300 rounded-full p-1 px-2 flex items-center justify-center cursor-pointer ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <MoveLeft className="text-gray-600 w-4" />
          </div>
          <div
            onClick={handleMoveRight}
            className={`hover:bg-[#658C4A] rounded-full p-1 px-2 flex items-center justify-center cursor-pointer ${
              currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <MoveRight className="text-gray-600 w-4" />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="relative overflow-hidden w-full mt-8">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}%)`,
            width: `${cards.length * 25}%`, // Adjust width according to the number of cards
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-[25%] p-4 rounded-lg"
            >
              <Image src={card.img} alt={card.title} className="mb-4" />
              <h3 className="font-semibold text-base">{card.title}</h3>
              <p className="text-[#658C4A] font-semibold pt-1">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-2 flex justify-center items-center">
        <button className="text-sm bg-[#658C4A] rounded-full px-3 py-1 tracking-tight text-white hover:text-[#658C4A] hover:bg-transparent">
          See More
        </button>
      </div>
    </div>
  );
};

export default Arrival;
