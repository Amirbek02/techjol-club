"use client";
import Image from "next/image";
import { useState } from "react";

const TaskForm = () => {
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="flex justify-center items-start p-8">
      {/* Left section with image placeholder */}
      <div className="flex flex-col items-center mr-6">
        <div className="w-[100px] h-[150px] bg-yellow-600 flex justify-center items-center rounded-lg mb-4">
          <span className="text-white text-3xl">📷</span>
        </div>
        <button className="border border-gray-400 text-sm rounded-lg px-4 py-1">
          Сүрөттү тандаңыз
        </button>
      </div>

      {/* Right section with form fields */}
      <div className="flex flex-col space-y-4 w-[300px]">
        <div className="flex items-center">
          <label className="font-medium text-lg w-1/3">Түс:</label>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-2/3 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex items-center">
          <label className="font-medium text-lg w-1/3">Багыт:</label>
          <input
            type="text"
            placeholder="Flutter"
            className="w-2/3 p-2 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="flex items-start">
          <label className="font-medium text-lg w-1/3">Маалымат:</label>
          <textarea
            placeholder="Текст..."
            className="w-2/3 p-2 border border-gray-300 rounded-lg h-[80px]"
          ></textarea>
        </div>

        <button
          className="w-full bg-yellow-600 text-white py-2 rounded-lg font-semibold"
          style={{ backgroundColor: "#CDA407" }}
        >
          Кошуу
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
