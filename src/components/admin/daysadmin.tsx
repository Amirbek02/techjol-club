"use client";

import Image from "next/image";
import Bell from "/public/assets/icon/ring.svg";
import Pro from "/public/assets/icon/close1.svg";
import { useState } from "react";
import Combobox from "./combobox";
import Delete from "../ui/delete";

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isLocal, setIsLocal] = useState(false);
  const opModal = () => {
    setIsLocal(true);
  };
  const cloModal = () => {
    setIsLocal(false);
  };
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white w-[828px] p-5 rounded-lg h-[525px]">
        <div onClick={onClose} className="flex cursor-pointer justify-end">
          <Image className="flex justify-end" src={Pro} alt="img" />
        </div>
        <div className="items-center p-5 pt-12  space-y-6 justify-center">
          <ul className="flex gap-10">
            <p className="font-medium text-xl">Кулактандырууну алуучу:</p>
            <Combobox />
          </ul>
          <ul className="flex gap-6 items-center">
            <p className="font-medium text-xl">Кулактандыруунун темасы:</p>
            <input
              type="text"
              placeholder="Введите текст"
              className="w-[395px] h-[30px] pl-5 border border-gray-300   "
            />
          </ul>
          <ul className="flex gap-8">
            <p className="font-medium text-xl">Кулактандыруунун тексти:</p>
            <textarea
              placeholder="Комментарий"
              className="w-[395px] border border-gray-300  px-3 py-2 roulg focus:outline-none "
              rows={4}
            ></textarea>
          </ul>
        </div>
        <div className="flex items-center justify-end pr-44 pt-5">
          <button
            style={{
              backgroundColor: "#CDA407",
            }}
            onClick={opModal}
            type="button"
            className="w-52   text-white py-2 px-4 rounded hover:bg-cyan-950"
          >
            Кошуу
          </button>
        </div>
      </div>
    </div>
  );
};

export const DaysAdminPage: React.FC = () => {
  const [isModal, setIsModal] = useState(false);
  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: "Frontend", days: [false, false, false, false, false] },
    { id: 2, label: "Backend", days: [false, false, false, false, false] },
    { id: 3, label: "Flutter", days: [false, false, false, false, false] },
  ]);

  const toggleCheckbox = (rowId: number, dayIndex: number) => {
    setCheckboxes((prev) =>
      prev.map((row) =>
        row.id === rowId
          ? {
              ...row,
              days: row.days.map((checked, index) =>
                index === dayIndex ? !checked : checked
              ),
            }
          : row
      )
    );
  };

  const openModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  return (
    <div className="p-20 space-y-10">
      <div className=" flex  gap-5">
        <div
          onClick={openModal}
          style={{
            backgroundColor: "#F9D446",
          }}
          className="w-[450px] cursor-pointer p-3 h-[120px] rounded-lg"
        >
          <div className="flex pb-2 justify-center">
            <Image src={Bell} alt="img" />
          </div>

          <p className="flex font-semibold text-2xl items-center justify-center">
            Кулактандыруу жиберүү
          </p>
        </div>
        <div
          style={{
            backgroundColor: "#F9D446",
          }}
          className="w-[450px] cursor-pointer p-3 h-[120px] rounded-lg"
        >
          <div className="flex pb-2 text-5xl font-semibold justify-center">
            0
          </div>

          <p className="flex font-semibold text-2xl items-center justify-center">
            Жаңы келген пикирлер
          </p>
        </div>
      </div>
      {isModal && <Modal onClose={closeModal} />}

      <div className="overflow-x-auto w-[923px] h-[360px]">
        <table className="min-w-full table-fixed border border-gray-800">
          <thead>
            <tr className="bg-gray-700 text-white">
              <th className="border border-gray-400 p-4 text-left"></th>
              <th className="border font-semibold text-xl border-gray-400 p-4 text-center">
                Дүйшөмбү
                <br />
                (9:00-17:00)
              </th>
              <th className="border font-semibold text-xl border-gray-400 p-4 text-center">
                Шейшемби
                <br />
                (9:00-17:00)
              </th>
              <th className="border font-semibold text-xl border-gray-400 p-4 text-center">
                Шаршемби
                <br />
                (9:00-17:00)
              </th>
              <th className="border text-xl border-gray-400 p-4 text-center">
                Бейшемби
                <br />
                (9:00-17:00)
              </th>
              <th className="border font-semibold text-xl border-gray-400 p-4 text-center">
                Жума
                <br />
                (9:00-17:00)
              </th>
            </tr>
          </thead>
          {checkboxes.map((row) => (
            <tbody key={row.id}>
              <tr className="bg-gray-200">
                <td className="border font-semibold text-xl border-gray-400 p-4 text-center">
                  {row.label}
                </td>
                {row.days.map((checked, dayIndex) => (
                  <td
                    key={dayIndex}
                    onClick={() => toggleCheckbox(row.id, dayIndex)}
                    className="border border-gray-400 p-4 text-center cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      readOnly
                      className="form-checkbox h-6 w-6"
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};
