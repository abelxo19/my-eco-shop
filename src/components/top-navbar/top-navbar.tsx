"use client";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

const useShowBar = () => {
  const [showbar, setShowbar] = useState(true);
  const handleClose = () => setShowbar(!showbar);
  return { showbar, handleClose };
};

const TopNavbar = () => {
  const { showbar, handleClose } = useShowBar();
  return (
    <div>
      {showbar && (
        <div className="bg-[#658C4A] ">
          <div className="flex justify-start md:justify-center items-center py-2 pl-12">
            <h1 className="font-semibold text-white text-xs md:text-sm lg:text-[16px] tracking-tight">
              Free Shipping with minimum purchase Rp250.000
            </h1>
            <ArrowRight className="ml-2 w-4 text-white hover:text-black/75 " />
          </div>
          <div className="flex justify-end mt-[-30px] pb-1 pr-12">
            <X className="text-white w-5 hover:text-black/75 " onClick={handleClose} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;