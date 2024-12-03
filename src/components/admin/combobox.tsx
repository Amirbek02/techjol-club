"use client";
import React, { useState } from "react";
import Gdsa from "/public/assets/icon/gg.svg";
import Image from "next/image";

const Combobox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  const options = ["Frontend", "Flutter", "Backend", "DevOps", "Ios"];

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setInputValue(value);
    setIsOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsOpen(true);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative w-[395px]">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={toggleDropdown}
        placeholder="Выберите стек"
        className="w-full h-[30px] pl-3 border border-gray-300 rounded"
      />

      <Image
        onClick={toggleDropdown}
        className="absolute cursor-pointer top-1/2 right-3 transform -translate-y-1/2"
        src={Gdsa}
        alt="Toggle options"
        width={16}
        height={16}
      />

      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 shadow-lg max-h-60 overflow-y-auto rounded">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-200"
              >
                {option}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-gray-500">Нет доступных вариантов</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Combobox;
