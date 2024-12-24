"use client";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div
        style={{
          backgroundColor: "#031634",
        }}
        className="w-[395px] h-screen fixed top-0 left-0  text-white "
      >
        <ul className=" pt-10 space-y-8">
          <li className=" flex items-center justify-start pl-32 font-semibold text-xl">
            <Link className="hover:text-yellow-500" href="">
              Башкы бет
            </Link>
          </li>
          <li className=" flex items-center justify-start pl-32  font-semibold text-xl">
            <Link className="hover:text-yellow-500" href="">
              Багыттар
            </Link>
          </li>
          <li className=" flex items-center justify-start pl-32 font-semibold text-xl ">
            <Link className="hover:text-yellow-500" href="">
              Өнөктөштөр
            </Link>
          </li>
          <li className=" flex items-center justify-start pl-32 font-semibold text-xl">
            <Link className="hover:text-yellow-500" href="">
              Менторлор
            </Link>
          </li>
          <li className=" flex items-center justify-start pl-32 font-semibold text-xl">
            <Link className="hover:text-yellow-500" href="">
              Пикирлер
            </Link>
          </li>
          <li className=" flex items-center justify-start pl-32 font-semibold text-xl">
            <Link className="hover:text-yellow-500" href="">
              Блогдор
            </Link>
          </li>
          <li className=" flex items-center justify-start pl-32 font-semibold text-xl ">
            <Link className="hover:text-yellow-500" href="">
              Катышуучулар
            </Link>
          </li>
          <li className=" flex items-center justify-start pl-32  font-semibold  text-xl">
            <Link className="hover:text-yellow-500 pl-30" href="">
              Кулактандыруу
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
