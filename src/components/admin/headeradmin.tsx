"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";

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
      className="bg-white shadow-md pr-10 pl-20"
    >
      <div className="container mx-auto  text-white flex justify-between items-center">
        <a className="flex cursor-pointer items-center">
          <Image src={Logo} alt="Logo" width={166} />
        </a>

        <nav className="flex justify-center items-center gap-20">
          <a className="text-white font-medium text-xl cursor-pointer hover:text-yellow-500">
            Башкы бет
          </a>

          <a className="text-white font-medium text-xl cursor-pointer hover:text-yellow-500">
            Биз тууралуу
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(true)}
          >
            <a className="text-white font-medium text-xl cursor-pointer hover:text-yellow-500">
              Багыттар
            </a>

            {/* Выпадающее меню */}
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
          <a className="text-white font-medium text-xl cursor-pointer hover:text-yellow-500">
            Блог
          </a>

          <a className="text-white font-medium text-xl cursor-pointer hover:text-yellow-500">
            Байланыш
          </a>
        </nav>

        <div className=" flex gap-3 ">
          <a className="text-yellow-500 font-medium text-xl hover:text-white">
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
