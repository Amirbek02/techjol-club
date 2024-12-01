"use client";

import Link from "next/link";
import Image from "next/image";
import Mentor from "/public/assets/icon/pensile5.svg";
import Close from "/public/assets/icon/delete6.svg";
interface Props {
  className?: string;
}

const tasktraker = [
  {
    id: 1,
    number: 1,
    name: "Как IT-сфера поможет кыргызстанцам решать проблемы",
  },
  {
    id: 2,
    number: 2,
    name: "Как IT-сфера поможет кыргызстанцам решать проблемы",
  },
  {
    id: 3,
    number: 3,
    name: "Как IT-сфера поможет кыргызстанцам решать проблемы",
  },
];

export const BlogAdminPage: React.FC<Props> = ({}) => {
  return (
    <div className=" w-[1045px] p-20">
      <div>
        <div className=" flex items-center mb-10 justify-end">
          <p className="font-semibold items-center justify-center flex text-4xl">
            Блогдор
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
                <p className="font-semibold text-[16px] cursor-pointer">
                  {nex.name}
                </p>
              </div>
              <div className="flex justify-end items-center gap-20">
                <div className="cursor-pointer hover:bg-slate-100 p-2 border shadow-sm">
                  <Image
                    src={Mentor}
                    alt="img"
                    className="rounded-full  w-[24px] h-[24px]"
                  />
                </div>
                <div className="border hover:bg-slate-100 p-2 shadow-sm cursor-pointer">
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
