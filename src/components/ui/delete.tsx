import React, { useState } from "react";
import Image from "next/image";
import Close from "/public/assets/image/delete.png";
import Wlo from "/public/assets/image/deleteicons.png";

interface AdProps {
  name: string;
  title: string;
  date: string;
  butt: string;
  but: string;
}

const Delete: React.FC<AdProps> = ({ title, butt, but }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="flex m-20 items-center justify-center">
        <div className="bg-white p-10 justify-center items-center w-[715px] shadow-md rounded-lg">
          <div className="flex justify-end">
            <Image
              src={Close}
              alt="Close icon"
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex justify-center">
            <Image src={Wlo} alt="Logo" />
          </div>
          <p className="flex font-semibold text-3xl p-10 items-center justify-center">
            {title}
          </p>
          <div className="flex gap-32 justify-center">
            <button
              style={{ backgroundColor: "#CDA407", borderRadius: "8px" }}
              className="text-white text-sm font-semibold w-32 h-10 border-collapse "
            >
              {butt}
            </button>
            <button
              style={{ backgroundColor: "#CDA407", borderRadius: "8px" }}
              className="text-white w-32 h-10 border-collapse "
            >
              {but}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delete;
