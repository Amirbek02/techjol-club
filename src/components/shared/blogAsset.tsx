"use client";
import Image from "next/image";
import Imager from "/public/assets/image/imag.png";

const BlogAsset = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid  lg:px-10  flex-wrap grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="relative">
            <h1 className="text-4xl font-bold mt-4">
              Как IT-сфера поможет кыргызстанцам решать проблемы
            </h1>
            <p className="text-gray-600 mt-2 py-6">19.08.2024</p>
            <Image
              src={Imager}
              alt="Main Article Image"
              width={600}
              height={400}
              className="rounded-lg w-full  object-cover"
            />

            <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <h1 className="text-4xl font-bold mt-4">
            Как IT-сфера поможет кыргызстанцам решать проблемы
          </h1>
          <p className="text-gray-600 mt-2">19.08.2024</p>
          <p className="text-lg flex-wrap mt-4 leading-relaxed">
            Информационные технологии существенно упрощают работу не только
            отдельно взятых людей, но и больших компаний. Например, благодаря им
            во многих компаниях внедряется CRM-система. Это удобный способ
            оптимизации бизнес-процессов, ведь система помогает определить
            интересы и предпочтения клиентов, а это один из главных этапов
            пэтапов при запуске бизнеса. По сути, это можно сравнить с большим
            ежедневником, где указаны задачи и важные заметки, только система
            сама все собирает, анализирует и хранит. <br /> Astana Hub начал
            прием заявок на третий поток совместной программы с Google for
            Startups. Об этом сообщили в пресс-службе Министерства цифрового
            развития, инновации и аэрокосмической промышленности РК. «Казахстан
            остается первой и единственной в Центральной Азии страной, где
            запущен акселератор совместно с мировой компанией Google for
            Startups, — сказали там. — Учитывая эффективность и высокие
            показатели прошлогодних двух потоков совместной программы Silkway
            Accelerator, Google for Startups приняла решение продолжить
            эксклюзивное партнерство с Astana Hub в этом году. <br />
            IT-стартапы из Кыргызстана могут подать заявку для участия в третьем
            потоке Silkway Accelerator до 17 февраля 2023-го». Напомним, в
            2022-м при поддержке Министерства цифрового развития, инновации и
            аэрокосмической промышленности РК Astana Hub стал первым партнером
            программы Google for Startups в Центральной Азии. Первый поток
            совместной программы Silkway Accelerator стартовал в июле, второй —
            в сентябре прошлого года. «Благодаря сотрудничеству с Google for
            Startups 25 лучших стартапов государств Центральной Азии,
            Азербайджана и Монголии вышли на мировой рынок, показав
            стремительный рост за время акселератора, — отметил Магжан Мадиев,
            СЕО Astana Hub. <br />— Ежемесячная выручка всех компаний в среднем
            выросла более чем в два раза. Результаты двух потоков говорят об
            эффективности программы, поэтому наше партнерство с Google for
            Startups получило вполне логическое продолжение. Мы уже начали сбор
            заявок на третий поток. И новость этого года в том, что Google for
            Startups расширила регион покрытия программы, добавив Грузию. Теперь
            стартапы этой страны также могут участвовать в нашем акселераторе».{" "}
            <br />В 2022-м для участия в программе подали 567 заявок от
            технологичных проектов, 30 из них успешно прошли отбор, а 25 за
            время программы увеличили свои доходы и вышли на новые рынки. К
            примеру, информационно-навигационная система Citix вышла на рынки
            Турции и ОАЭ. Основатели стартапа zypl.ai расширили продажи на двух
            новых рынках и увеличили оценку с $6 млн до $10 млн.
            <br />
            Проект CTOgram сделал охват в 230 тысяч активных автовладельцев и
            более 2 тысяч ремонтных мастерских. Компания Fibo.cloud повысила
            свой ежемесячный доход в 22 раза, образовательная платформа Metatesk
            — с $4 тысяч до $18 тысяч, а продажи необанка Planet9 увеличились с
            0 до $70 тысяч. Zan.bar вышел на рынки Европы и интегрировал свой
            продукт с 12 банками в Великобритании.
          </p>
        </div>

        <div>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className=" flex-col md:flex-row mb-8 bg-white shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={Imager}
                alt="Related Article Image"
                width={600}
                height={308}
                className=""
              />
              <div className="p-4 ">
                <h2 className="text-lg font-semibold">
                  Как IT-сфера поможет кыргызстанцам решать проблемы
                </h2>
                <p className="text-gray-600 text-sm">19.08.2024</p>
                <p className="mt-2 text-gray-700 text-sm">
                  В последние годы страна демонстрирует устойчивый рост в сфере
                  технологий...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogAsset;
