"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { Avatar } from "../ui/avatar";
import Image from "next/image";
import Mentor from "/public/assets/icon/persile1.svg";

import Close from "/public/assets/icon/delete2.svg";

interface Props {
  className?: string;
}

const tasktraker = [
  {
    id: 1,
    number: 1,
    imgSrc: "/assets/image/partners2.png",
    name: "App IT компаниясы",
  },
];

export const PartnersAdmin: React.FC<Props> = ({}) => {
  return (
    <div className=" w-[1045px] p-20">
      <div>
        <div className=" flex items-center mb-10 justify-end">
          <p className="font-semibold items-center justify-center flex text-4xl">
            Өнөктөштөр
          </p>
          <div className="flex pl-44 justify-end items-end">
            <Link
              href="/form"
              className="w-[190px] rounded-sm bg-yellow-600 hover:bg-yellow-500 text-2xl font-semibold h-[50px] flex items-center justify-center"
            >
              Кошуу
            </Link>
          </div>
        </div>

        {tasktraker.map((nex) => (
          <div key={nex.id} className="flex space-y-10 items-center space-x-4">
            <div className="flex p-3 mb-10 shadow-md rounded-sm items-center justify-between border w-[924px] h-auto  gap-5">
              <div className="flex gap-8 items-center">
                {" "}
                <p className="font-semibold text-2xl">{nex.number}.</p>
                <Avatar className="w-12 h-12">
                  <Image
                    src={nex.imgSrc}
                    alt={nex.name}
                    width={50}
                    height={50}
                    className="rounded-full cursor-pointer"
                  />
                </Avatar>
                <p className="font-normal text-2xl cursor-pointer">
                  {nex.name}
                </p>
              </div>
              <div className="flex justify-end items-center gap-20">
                <div className="cursor-pointer p-2 border hover:bg-slate-100 shadow-sm">
                  <Image
                    src={Mentor}
                    alt="img"
                    className="rounded-full  w-[24px] h-[24px]"
                  />
                </div>
                <div className="border hover:bg-slate-100  p-2 shadow-sm cursor-pointer">
                  <Image src={Close} alt="img" className=" w-[24px] h-[24px]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
