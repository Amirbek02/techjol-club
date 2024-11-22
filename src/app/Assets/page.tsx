"use client";
import React, { useState } from "react";
import Image from "next/image";
import blog from "/public/assets/image/imag.png";
import blog2 from "/public/assets/image/image.png";

interface Props {
  className?: string;
}

interface Post {
  id: number;
  title: string;
  description: string;
}
const blogPosts = [
  {
    id: 1,
    imgSrc: blog2,
    title: "Как IT-сфера поможет кыргызстанцам решать проблемы",
    date: "13.08.2021",
    description:
      'Хакатон — это подобие "мозгового штурма", когда люди собираются для решения какой-либо проблемы.',
  },
  {
    id: 2,
    imgSrc: blog2,
    title: "Как IT-сфера поможет кыргызстанцам решать проблемы",
    date: "13.08.2021",
    description:
      'Хакатон — это подобие "мозгового штурма", когда люди собираются для решения какой-либо проблемы.',
  },
  {
    id: 3,
    imgSrc: blog2,
    title: "Как IT-сфера поможет кыргызстанцам решать проблемы",
    date: "13.08.2021",
    description:
      'Хакатон — это подобие "мозгового штурма", когда люди собираются для решения какой-либо проблемы.',
  },
  {
    id: 4,
    imgSrc: blog2,
    title: "Как IT-сфера поможет кыргызстанцам решать проблемы",
    date: "13.08.2021",
    description:
      'Хакатон — это подобие "мозгового штурма", когда люди собираются для решения какой-либо проблемы.',
  },
  {
    id: 5,
    imgSrc: blog2,
    title: "Как IT-сфера поможет кыргызстанцам решать проблемы",
    date: "13.08.2021",
    description:
      'Хакатон — это подобие "мозгового штурма", когда люди собираются для решения какой-либо проблемы.',
  },
  {
    id: 6,
    imgSrc: blog2,
    title: "Как IT-сфера поможет кыргызстанцам решать проблемы",
    date: "13.08.2021",
    description:
      'Хакатон — это подобие "мозгового штурма", когда люди собираются для решения какой-либо проблемы.',
  },
  {
    id: 7,
    imgSrc: blog2,
    title: "Как IT-сфера поможет кыргызстанцам решать проблемы",
    date: "13.08.2021",
    description:
      'Хакатон — это подобие "мозгового штурма", когда люди собираются для решения какой-либо проблемы.',
  },
  {
    id: 8,
    imgSrc: blog2,
    title: "Как IT-сфера поможет кыргызстанцам решать проблемы",
    date: "13.08.2021",
    description:
      'Хакатон — это подобие "мозгового штурма", когда люди собираются для решения какой-либо проблемы.',
  },
  {
    id: 9,
    imgSrc: blog2,
    title: "Как IT-сфера поможет кыргызстанцам решать проблемы",
    date: "13.08.2021",
    description:
      'Хакатон — это подобие "мозгового штурма", когда люди собираются для решения какой-либо проблемы.',
  },
];

const postsPerPage = 6;

export const BlogAssets: React.FC<Props> = ({ className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="flex flex-col items-center py-10 px-4 mx-auto max-w-[1240px] md:py-16 md:px-10">
      {currentPage === 1 && (
        <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
          <div className="flex-1">
            <h1 className="text-lg sm:text-3xl font-semibold leading-tight mb-3 md:text-4xl lg:text-3xl">
              Как IT-сфера поможет кыргызстанцам решать проблемы
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mb-7 md:text-lg">
              13.08.2024
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-serif w-full max-w-[592px]">
              Информационные технологии существенно упрощают работу не только
              отдельно взятых людей, но и больших компаний. Например, благодаря
              им во многих компаниях внедряется CRM-система. Это удобный способ
              оптимизации бизнес-процессов, ведь система помогает определить
              интересы и предпочтения клиентов...
              <span className="text-yellow-500 cursor-pointer">подробнее</span>
            </p>
          </div>
          <div className="hidden md:block">
            <Image
              src={blog}
              alt="Blog Image"
              className="rounded-lg"
              width={550}
              height={360}
            />
          </div>
          <div className="md:hidden mt-4">
            <Image
              src={blog}
              alt="Blog Image"
              className="rounded-lg mx-auto"
              width={590}
              height={200}
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-4 cursor-pointer"
          >
            <div className="w-full">
              <Image
                src={post.imgSrc}
                alt="Blog Post Image"
                className="rounded-lg"
                width={350}
                height={200}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-2">{post.date}</p>
              <p className="text-base">{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-200"
          }`}
        >
          <svg
            width="12"
            height="13.57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 13.57L0 8.28L0 5.28L12 0L12 3.45L3.89 6.7L3.89 6.86L12 10.11L12 13.57Z"
              fill="#031634"
            />
          </svg>
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-10 h-10 flex items-center justify-center rounded-full ${
              currentPage === index + 1
                ? "bg-blue-200"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <span className="font-bold text-yellow-400">{index + 1}</span>
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-200"
          }`}
        >
          <svg
            width="12"
            height="13.57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5.28L12 8.28L0 13.57L0 10.11L8.1 6.86L8.1 6.7L0 3.45L0 0L12 5.28Z"
              fill="#031634"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
