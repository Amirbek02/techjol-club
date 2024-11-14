import React, { useState } from "react";

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

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative w-64">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onClick={() => setIsOpen(!isOpen)}
        placeholder="Тамдоо"
        className="w-[395px] h-[30px] pl-5 rounded-lg border border-gray-300 "
      />

      {isOpen && (
        <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-y-auto">
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
            <li className="px-3 py-2 text-gray-500">No options found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Combobox;
