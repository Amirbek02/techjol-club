import React from 'react';

interface Props {
  className?: string;
}

export const SheduleTable: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border-4 border-gray-500 text-center h-64">
          <thead>
            <tr>
              <th className="border border-gray-500 p-2">Д</th>
              <th className="border border-gray-500 p-2">Ш</th>
              <th className="border border-gray-500 p-2">Ш</th>
              <th className="border border-gray-500 p-2">Б</th>
              <th className="border border-gray-500 p-2">Ж</th>
              <th className="border border-gray-500 p-2">И</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 p-2">Frontend</td>
              <td className="border border-gray-500 p-2 bg-gray-200">9:00-17:00</td>
              <td className="border border-gray-500 p-2 bg-gray-200">9:00-17:00</td>
              <td className="border border-gray-500 p-2"></td>
              <td className="border border-gray-500 p-2"></td>
              <td className="border border-gray-500 p-2 bg-gray-200">9:00-17:00</td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">Backend</td>
              <td className="border border-gray-500 p-2"></td>
              <td className="border border-gray-500 p-2 bg-gray-200">9:00-17:00</td>
              <td className="border border-gray-500 p-2 bg-gray-200">9:00-17:00</td>
              <td className="border border-gray-500 p-2"></td>
              <td className="border border-gray-500 p-2 bg-gray-200">9:00-17:00</td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">Flutter</td>
              <td className="border border-gray-500 p-2 bg-gray-200">9:00-17:00</td>
              <td className="border border-gray-500 p-2"></td>
              <td className="border border-gray-500 p-2"></td>
              <td className="border border-gray-500 p-2 bg-gray-200">9:00-17:00</td>
              <td className="border border-gray-500 p-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
