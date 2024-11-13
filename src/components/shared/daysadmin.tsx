"use client";

import Image from "next/image";
import Bell from "/public/assets/image/bell.png";

export const DaysAdminPage: React.FC = () => {
  return (
    <div className="p-20 space-y-10">
      <div className=" flex  gap-5">
        <div
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
          <tbody>
            <tr className="bg-gray-200">
              <td className="border font-semibold text-xl border-gray-400 p-4 text-center">
                Frontend
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6"
                  checked
                />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="border font-semibold text-xl border-gray-400 p-4 text-center">
                Backend
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="border font-semibold text-xl border-gray-400 p-4 text-center">
                Flutter
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
              <td className="border border-gray-400 p-4 text-center">
                <input type="checkbox" className="form-checkbox h-6 w-6" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
