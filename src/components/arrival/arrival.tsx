"use client";
import { MoveRight, MoveLeft } from "lucide-react";
import { useState } from "react";
import A1 from '@/assets/arrival/image 989.png'
import A2 from '@/assets/arrival/image 990.png'
import A3 from '@/assets/arrival/image 991.png'
import A4 from '@/assets/arrival/image 992.png'
import A5 from '@/assets/arrival/image 995.png'
import A6 from '@/assets/arrival/image 996.png'
import A7 from '@/assets/arrival/image 997.png'
import Image from "next/image";

const Arrival = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide position

  const cards = [
    { img: A1, title: "Card 1", description: "Description 1" },
    { img: A2, title: "Card 2", description: "Description 2" },
    { img: A3, title: "Card 3", description: "Description 3" },
    { img: A4, title: "Card 4", description: "Description 4" },
    { img: A5, title: "Card 5", description: "Description 5" },
    { img: A6, title: "Card 6", description: "Description 6" },
    { img: A7, title: "Card 7", description: "Description 7" },
  ];

  const visibleCards = 4; // Show 4 cards at a time
  const cardWidth = 25; // Each card takes up 25% of the total width
  const maxIndex = cards.length - visibleCards;

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
    <div className="mx-8 pt-10">
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
              className="w-[25%] flex-shrink-0 p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <Image src={card.img} alt={card.title} className="mb-4" />
              <h3 className="font-bold text-lg">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arrival;
