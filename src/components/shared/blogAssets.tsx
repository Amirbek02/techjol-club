"use client";
import React, { useState } from "react";
import Image from "next/image";
import blog from "/public/assets/image/imag.png";
import blog2 from "/public/assets/image/image.png";

const blogAssets = () => {
  const blogPosts = [
    {
      imgSrc: blog2,
      title: "Как IT-сфера поможет кыргызстанцам решать проблемы",
      date: "13.08.2021",
      description:
        'Хакатон — это подобие "мозгового штурма", когда люди собираются для решения какой-либо проблемы.',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="flex flex-col items-center py-16 mx-auto max-w-screen-xl px-4 md:px-10">
      <div className="flex flex-col md:flex-row md:space-x-10 mb-10">
        <div className="flex-1">
          <h1 className="text-4xl font-semibold leading-tight mb-4 md:text-2xl lg:text-3xl">
            Как IT-сфера поможет кыргызстанцам решать проблемы
          </h1>
          <p className="text-lg text-gray-500 mb-6 md:text-base">13.08.2024</p>
          <p className="text-2xl leading-relaxed md:text-sm">
            Информационные технологии существенно упрощают работу не только
            отдельно взятых людей, но и больших компаний. Например, благодаря им
            во многих компаниях внедряется CRM-система. Это удобный способ
            оптимизации бизнес-процессов, ведь система помогает определить
            интересы и предпочтения клиентов, а это один из главных этапов
            пэтапов при запуске бизнеса. По сути, это можно сравнить с большим
            ежедневником, где указаны задачи и важные заметки, только система
            сама все собирает, анализирует и хранит...
            <span className="text-yellow-500">подробнее</span>
          </p>
        </div>
        <div className="hidden md:block">
          <Image
            src={blog}
            alt="Blog Image"
            className="rounded-lg"
            width={501}
            height={362}
          />
        </div>
        <div className="md:hidden">
          <Image
            src={blog}
            alt="Blog Image"
            className="rounded-lg mx-auto"
            width={551}
            height={362}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {currentPosts.map((post, index) => (
          <div key={index} className="bg-gray-100 rounded-lg max-w-xs w-full">
            <Image
              src={post.imgSrc}
              alt={post.title}
              className="rounded-t-lg w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-base">{post.description}</p>
            </div>
          </div>
        ))}
        {currentPosts.map((post, index) => (
          <div key={index} className="bg-gray-100 rounded-lg max-w-xs w-full">
            <Image
              src={post.imgSrc}
              alt={post.title}
              className="rounded-t-lg w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-base">{post.description}</p>
            </div>
          </div>
        ))}
        {currentPosts.map((post, index) => (
          <div key={index} className="bg-gray-100 rounded-lg max-w-xs w-full">
            <Image
              src={post.imgSrc}
              alt={post.title}
              className="rounded-t-lg w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-base">{post.description}</p>
            </div>
          </div>
        ))}
        {currentPosts.map((post, index) => (
          <div key={index} className="bg-gray-100 rounded-lg max-w-xs w-full">
            <Image
              src={post.imgSrc}
              alt={post.title}
              className="rounded-t-lg w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-base">{post.description}</p>
            </div>
          </div>
        ))}
        {currentPosts.map((post, index) => (
          <div key={index} className="bg-gray-100 rounded-lg max-w-xs w-full">
            <Image
              src={post.imgSrc}
              alt={post.title}
              className="rounded-t-lg w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-base">{post.description}</p>
            </div>
          </div>
        ))}
        {currentPosts.map((post, index) => (
          <div key={index} className="bg-gray-100 rounded-lg max-w-xs w-full">
            <Image
              src={post.imgSrc}
              alt={post.title}
              className="rounded-t-lg w-full h-auto"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-500 mb-4">{post.date}</p>
              <p className="text-base">{post.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-12">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 ${
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
            className={`w-12 h-12 flex items-center justify-center rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-200"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <span className="font-bold text-yellow-400 text-lg">
              {index + 1}
            </span>
          </button>
        ))}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-12 h-12 flex items-center justify-center rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-200"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <span className="font-bold  text-lg">{index + 2}</span>
          </button>
        ))}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-12 h-12 flex items-center justify-center rounded-lg ${
              currentPage === index + 1
                ? "bg-blue-200"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <span className="font-bold  text-lg">{index + 3}</span>
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 ${
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

export default blogAssets;
