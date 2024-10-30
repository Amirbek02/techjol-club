"use client";
import React from "react";
import { GrLanguage } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

interface Props {
  className?: string;
}

export const Connect: React.FC<Props> = ({ className }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="sm:mb-6">
        <p className="text-3xl sm:text-5xl font-bold">Байланыш</p>
      </div>

      <div className="flex md:flex-wrap   sm:gap-36 lg:gap-30 py-7 flex-col md:flex-row items-center  mb-6">
        <div className="flex-1 mb-6  md:ml-20 ">
          <ul className=" space-y-1 sm:space-y-8 sm:justify-center text-lg">
            <li className="flex items-center gap-7 lg:gap-10 sm:gap-16">
              <FaPhone
                style={{
                  width: 30,
                  height: 30,
                  color: "#CDA407",
                }}
                className="text-xl"
              />
              <p className="text-xl font-semibold">+996 700 700 700</p>
            </li>
            <li className="flex py-6 items-center gap-7 lg:gap-10 sm:gap-16">
              <AiFillInstagram
                style={{
                  width: 30,
                  height: 30,
                  color: "#CDA407",
                }}
                className="text-xl"
              />
              <p className="text-xl font-semibold">@techjol</p>
            </li>
            <li className="flex items-center gap-7 lg:gap-10 sm:gap-16">
              <IoLogoWhatsapp
                style={{
                  width: 30,
                  height: 30,
                  color: "#CDA407",
                }}
                className="text-xl"
              />
              <p className="text-xl font-semibold">+996 700 700 700</p>
            </li>
            <li className="flex py-6 items-center gap-7 lg:gap-10 sm:gap-16">
              <FaTelegram
                style={{
                  width: 30,
                  height: 30,
                  color: "#CDA407",
                }}
                className="text-xl"
              />
              <p className="text-xl font-semibold">@techjol</p>
            </li>
            <li className="flex items-center gap-7 lg:gap-10 sm:gap-16">
              <MdEmail
                style={{
                  width: 30,
                  height: 30,
                  color: "#CDA407",
                }}
                className="text-xl"
              />
              <p className="text-xl font-semibold">techjol@gmail.com</p>
            </li>
            <li className="flex py-6 items-center gap-7 lg:gap-10 sm:gap-16">
              <GrLanguage
                style={{
                  width: 30,
                  height: 30,
                  color: "#CDA407",
                }}
                className="text-xl"
              />
              <p className="text-xl font-semibold">www.techjol.com</p>
            </li>
            <li className="flex items-center gap-7 lg:gap-10 sm:gap-16">
              <FaLocationDot
                style={{
                  width: 30,
                  height: 30,
                  color: "#CDA407",
                }}
                className="text-xl"
              />
              <p className="text-xl font-semibold">Горький к., 97</p>
            </li>
          </ul>
        </div>

        <div className="flex-1 w-full md:w-[715px] md:h-[540px] px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11952.786243855508!2d72.38970025720735!3d41.500015061504875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a3158b1b3c2713%3A0xf24c2c3c901f007b!2z0JrRi9C30YvQuy3QkdC10LnQv9GC!5e0!3m2!1sky!2skg!4v1729096231465!5m2!1sky!2skg"
            width="100%"
            height="100%"
            className="w-full sm:w-[300px] md:w-[500px] lg:w-[700px] min-w-[300px] min-h-[260px] mx-auto"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
