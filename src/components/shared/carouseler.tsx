"use client";
import { useState, useEffect } from "react";
import Left1 from "/public/assets/image/left.png";
import Right from "/public/assets/image/rigth.png";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Амираев Амирбек",
    position: "Frontend Developer",
    image: "/assets/image/mentor1.png",
    text: `После буткемпа я быстро получила работу, но чувствовала себя на ней ужасно неуверенно. Глядя на опытных специалистов вокруг, я думала: “Боже, да куда мне до них?” и ловила себя на мысли, что мне здесь не место, что я каким-то чудом оказалась среди настоящих профессионалов. Справится самой мне не получилось, поэтому я пошла в академию. Я начала задавать вопросы своим менторам, закрыла пробелы в знаниях. А главное - во мне проснулась уверенность в собственных силах. Моей личной победой стал тот момент, когда в наш офис пришел новый заказчик и выбрал именно меня для работы над проектом!`,
  },
  {
    id: 2,
    name: "Алиева Алия",
    position: "Backend Developer",
    image: "/assets/image/mentor1.png",
    text: `После буткемпа я быстро получила работу, но чувствовала себя на ней ужасно неуверенно. Глядя на опытных специалистов вокруг, я думала: “Боже, да куда мне до них?” и ловила себя на мысли, что мне здесь не место, что я каким-то чудом оказалась среди настоящих профессионалов. Справится самой мне не получилось, поэтому я пошла в академию. Я начала задавать вопросы своим менторам, закрыла пробелы в знаниях. А главное - во мне проснулась уверенность в собственных силах. Моей личной победой стал тот момент, когда в наш офис пришел новый заказчик и выбрал именно меня для работы над проектом!`,
  },
  {
    id: 3,
    name: "Алиева Алия",
    position: "Backend Developer",
    image: "/assets/image/mentor1.png",
    text: `После буткемпа я быстро получила работу, но чувствовала себя на ней ужасно неуверенно. Глядя на опытных специалистов вокруг, я думала: “Боже, да куда мне до них?” и ловила себя на мысли, что мне здесь не место, что я каким-то чудом оказалась среди настоящих профессионалов. Справится самой мне не получилось, поэтому я пошла в академию. Я начала задавать вопросы своим менторам, закрыла пробелы в знаниях. А главное - во мне проснулась уверенность в собственных силах. Моей личной победой стал тот момент, когда в наш офис пришел новый заказчик и выбрал именно меня для работы над проектом!`,
  },
  {
    id: 4,
    name: "Алиева Алия",
    position: "Backend Developer",
    image: "/assets/image/mentor1.png",
    text: `После буткемпа я быстро получила работу, но чувствовала себя на ней ужасно неуверенно. Глядя на опытных специалистов вокруг, я думала: “Боже, да куда мне до них?” и ловила себя на мысли, что мне здесь не место, что я каким-то чудом оказалась среди настоящих профессионалов. Справится самой мне не получилось, поэтому я пошла в академию. Я начала задавать вопросы своим менторам, закрыла пробелы в знаниях. А главное - во мне проснулась уверенность в собственных силах. Моей личной победой стал тот момент, когда в наш офис пришел новый заказчик и выбрал именно меня для работы над проектом!`,
  },
  {
    id: 5,
    name: "Алиева Алия",
    position: "Backend Developer",
    image: "/assets/image/mentor1.png",
    text: `После буткемпа я быстро получила работу, но чувствовала себя на ней ужасно неуверенно. Глядя на опытных специалистов вокруг, я думала: “Боже, да куда мне до них?” и ловила себя на мысли, что мне здесь не место, что я каким-то чудом оказалась среди настоящих профессионалов. Справится самой мне не получилось, поэтому я пошла в академию. Я начала задавать вопросы своим менторам, закрыла пробелы в знаниях. А главное - во мне проснулась уверенность в собственных силах. Моей личной победой стал тот момент, когда в наш офис пришел новый заказчик и выбрал именно меня для работы над проектом!`,
  },
  {
    id: 6,
    name: "Алиева Алия",
    position: "Backend Developer",
    image: "/assets/image/mentor1.png",
    text: `После буткемпа я быстро получила работу, но чувствовала себя на ней ужасно неуверенно. Глядя на опытных специалистов вокруг, я думала: “Боже, да куда мне до них?” и ловила себя на мысли, что мне здесь не место, что я каким-то чудом оказалась среди настоящих профессионалов. Справится самой мне не получилось, поэтому я пошла в академию. Я начала задавать вопросы своим менторам, закрыла пробелы в знаниях. А главное - во мне проснулась уверенность в собственных силах. Моей личной победой стал тот момент, когда в наш офис пришел новый заказчик и выбрал именно меня для работы над проектом!`,
  },
  // Добавьте другие отзывы по аналогии
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Функция для обновления состояния ширины экрана
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 650);
  };

  // Следим за изменением размера экрана
  useEffect(() => {
    handleResize(); // Проверим на начальном рендере
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleTestimonials = () => {
    const previousIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;

    return [
      testimonials[previousIndex],
      testimonials[currentIndex],
      testimonials[nextIndex],
    ];
  };

  // Рендерим мобильную версию, если ширина меньше или равна 650px
  if (isMobile) {
    return (
      <div className="relative overflow-hidden mx-auto p-10">
        <p className="text-3xl sm:text-5xl font-bold text-center mb-5 sm:mb-12">
          Пикирлер
        </p>
        <div className="flex items-center justify-center">
          <button
            style={{
              backgroundColor: "#D2D2D3",
            }}
            onClick={handlePrevious}
            className="absolute left-2 p-2 rounded-full shadow-lg z-10"
          >
            <Image src={Left1} width={24} height={24} alt="Left Arrow" />
          </button>
          <div className="flex space-x-4 transition-transform duration-500 ease-in-out">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`w-[300px] bg-white shadow-[-2px_-3px_6px_6px_rgba(0,0,0,0.1)] p-5 rounded-lg transition-opacity duration-500 ease-in-out ${
                  index === 1 ? "opacity-100 scale-100" : "opacity-50 scale-90"
                }`}
              >
                <div className="sm:flex gap-6 justify-start items-center">
                  <div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4"
                    />
                  </div>
                  <div>
                    <h3 className="sm:text-2xl text-xl font-medium text-center">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-center text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
                <p className="text-center text-xs mt-4 text-gray-600">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
          <button
            style={{
              backgroundColor: "#D2D2D3",
            }}
            onClick={handleNext}
            className="absolute right-2 p-2 rounded-full shadow-lg z-10"
          >
            <Image src={Right} width={24} height={24} alt="Right Arrow" />
          </button>
        </div>
      </div>
    );
  }

  // Рендерим обычную версию, если ширина больше 650px
  return (
    <div className="relative overflow-hidden mx-auto  sm:p-10">
      <p className=" text-3xl sm:text-5xl font-bold text-center mb-12">
        Пикирлер
      </p>
      <div className="flex items-center justify-center">
        <button
          style={{
            backgroundColor: "#D2D2D3",
          }}
          onClick={handlePrevious}
          className="absolute  md:left-4 left-2 lg:left-44 p-2 rounded-full  shadow-lg z-10"
        >
          <Image src={Left1} width={24} height={24} alt="Left Arrow" />
        </button>
        <div className="flex space-x-4 transition-transform duration-500 ease-in-out">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`w-[800px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[900px] bg-white shadow-[-2px_-3px_6px_6px_rgba(0,0,0,0.1)] p-12 rounded-lg transition-opacity duration-500 ease-in-out ${
                index === 1 ? "opacity-100 scale-100" : "opacity-50 scale-90"
              }`}
            >
              <div className="flex gap-6 justify-start items-center">
                <div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-center">
                    {testimonial.name}
                  </h3>
                  <p className="text-lg text-center text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="text-center xs:w-[240px] text-sm mt-4 text-gray-600">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
        <button
          style={{
            backgroundColor: "#D2D2D3",
          }}
          onClick={handleNext}
          className="absolute right-2 md:right-4 lg:right-44 p-2 rounded-full bg-white shadow-lg z-10"
        >
          <Image src={Right} width={24} height={24} alt="Left Arrow" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
