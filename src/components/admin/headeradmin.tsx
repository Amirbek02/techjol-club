"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Logo from "/public/assets/image/techjol-logo.png";
import Pash from "/public/assets/image/path2.png";

const HeaderAdmin: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header
      style={{
        backgroundColor: "#031634",
      }}
      className="bg-white h-[100px] items-center flex  shadow-md"
    >
      <div className="container mx-auto flex justify-between space-x-10 items-center max-w-[1240px] px-6 sm:px-20">
        <a className="flex items-center shrink-0 max-h-[80px]">
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={150}
            className="max-h-full"
          />
        </a>
        <nav className="flex items-center gap-8 sm:gap-10">
          <a className="text-white hover:underline font-medium text-lg sm:text-[18px] cursor-pointer hover:text-yellow-500">
            Башкы бет
          </a>
          <a className="text-white hover:underline font-medium text-lg sm:text-[18px] cursor-pointer hover:text-yellow-500">
            Биз тууралуу
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a className="text-white hover:underline font-medium text-lg sm:text-[18px] cursor-pointer hover:text-yellow-500">
              Багыттар
            </a>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                <ul className="text-gray-800">
                  <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">
                    Frontend
                  </li>
                  <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">
                    Backend
                  </li>
                  <li className="px-4 py-2 hover:bg-yellow-100 cursor-pointer">
                    Flutter
                  </li>
                </ul>
              </div>
            )}
          </div>
          <a className="text-white hover:underline font-medium text-lg sm:text-[18px] cursor-pointer hover:text-yellow-500">
            Блог
          </a>
          <a className="text-white hover:underline font-medium text-lg sm:text-[18px] cursor-pointer hover:text-yellow-500">
            Байланыш
          </a>
        </nav>

        {/* Админ блок */}
        <div className="flex items-center gap-3">
          <a className="text-yellow-500 font-medium text-lg sm:text-xl hover:text-white">
            Админ
          </a>
          <Image
            className="cursor-pointer"
            src={Pash}
            alt="img"
            width={28}
            height={28}
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
