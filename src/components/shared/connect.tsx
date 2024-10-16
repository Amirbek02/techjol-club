"use client";
import React from "react";
import { GrLanguage } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

type Props = {};

export default function Connect({}: Props) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-6">
        <p className="text-2xl font-bold">Байланыш</p>
      </div>

      <div className="flex gap-10 flex-col md:flex-row items-center justify-between w-full max-w-3xl mb-6">
        <div className="flex-1 mb-6 md:mb-0">
          <ul className="space-y-4  text-lg">
            <li className="flex items-center gap-3">
              <FaPhone
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <p className="font-semibold">+996 700 700 700</p>
            </li>
            <li className="flex py-6 items-center gap-3">
              <AiFillInstagram
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <p className="font-semibold">@techjol</p>
            </li>
            <li className="flex items-center gap-3">
              <IoLogoWhatsapp
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <p className="font-semibold">+996 700 700 700</p>
            </li>
            <li className="flex py-6 items-center gap-3">
              <FaTelegram
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <p className="font-semibold">@techjol</p>
            </li>
            <li className="flex items-center gap-3">
              <MdEmail
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <p className="font-semibold">techjol@gmail.com</p>
            </li>
            <li className="flex py-6 items-center gap-3">
              <GrLanguage
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <p className="font-semibold">www.techjol.com</p>
            </li>
            <li className="flex items-center gap-3">
              <FaLocationDot
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <p className="font-semibold">Горький к., 97</p>
            </li>
          </ul>
        </div>

        <div className="flex-1 w-full md:w-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11952.786243855508!2d72.38970025720735!3d41.500015061504875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38a3158b1b3c2713%3A0xf24c2c3c901f007b!2z0JrRi9C30YvQuy3QkdC10LnQv9GC!5e0!3m2!1sky!2skg!4v1729096231465!5m2!1sky!2skg"
            width="full"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
