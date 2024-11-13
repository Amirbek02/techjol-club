"use client";
import React from "react";
interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#031634",
        }}
        className="w-[395px] h-screen fixed top-0 left-0  text-white "
      >
        <ul className=" pt-10 space-y-8">
          <li className=" flex items-center justify-evenly font-semibold text-2xl">
            <a className="hover:text-yellow-500" href="">
              Башкы бет
            </a>
          </li>
          <li className=" flex items-center justify-evenly font-semibold text-2xl">
            <a className="hover:text-yellow-500" href="">
              Багыттар
            </a>
          </li>
          <li className=" flex items-center justify-center font-semibold text-2xl ">
            <a className="hover:text-yellow-500" href="">
              Өнөктөштөр
            </a>
          </li>
          <li className=" flex items-center justify-center font-semibold text-2xl">
            <a className="hover:text-yellow-500" href="">
              Менторлор
            </a>
          </li>
          <li className=" flex items-center justify-evenly font-semibold text-2xl">
            <a className="hover:text-yellow-500" href="">
              Пикирлер
            </a>
          </li>
          <li className=" flex items-center justify-evenly font-semibold text-2xl">
            <a className="hover:text-yellow-500" href="">
              Блогдор
            </a>
          </li>
          <li className=" flex items-center justify-center font-semibold text-2xl ">
            <a className="hover:text-yellow-500" href="">
              Катышуучулар
            </a>
          </li>
          <li className=" flex items-center justify-center font-semibold  text-2xl">
            <a className="hover:text-yellow-500" href="">
              Кулактандыруу
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
