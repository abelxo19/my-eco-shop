import React from 'react';
import { X } from 'lucide-react';
import Notify from '@/assets/notification/image 1005.png';
import Image from 'next/image';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
   
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex justify-between bg-white shadow-lg rounded-lg h-auto max-h-80">
        <div className="mr-4">
          <Image src={Notify} alt="no_image" className="h-[19rem] w-72" />
        </div>
        <div className="text-center py-2 pr-2">
          <div className="flex justify-end">
            <X onClick={onClose} className="h-4 w-4 cursor-pointer" />
          </div>
          <div className="pt-16">
            <h2 className="text-lg font-bold font-libre-baskerville">Get 15% off</h2>
            <p className="mt-2 text-sm">{message}</p>
            <button
              className="mt-4 px-4 py-2 text-[#658C4A] hover:text-green-600 transition"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
