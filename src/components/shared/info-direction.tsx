import React from 'react';
import { Container } from './container';
import { Title } from './title';
import Image from 'next/image';
import { Button } from '../ui/button';

interface Props {
  className?: string;
}

export const InfoDirection: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Container className="mx-5">
        <Title text="Frontend" size="lg" className="text-center mt-24 mb-16 font-semibold" />
        <div>
          <Image
            className="inline float-left mr-5 mb-5"
            src={`/assets/image/frontend.png`}
            alt="image"
            width={610}
            height={329}
          />
          <p className="inline text-xl">
            Фронтенд (англ. front end, frontend) — презентационная часть информационной или
            программной системы, её пользовательский интерфейс и связанные с ним компоненты;
            применяется в соотношении с базисной частью системы, её внутренней реализацией,
            называемой в этом случае бэкендом (англ. backend). Разделение программных систем на
            фронтенд и бэкенд — одно из стандартных решений для архитектуры программного
            обеспечения, связанное в программной инженерии с принципом разделения ответственности
            между внешним представлением и внутренней реализацией. Как правило, бэкенд реализует
            API, используемые фронтендом, и таким образом фронтенд-разработчику не нужно знать
            особенности реализации внутренней части, а бэкенд-разработчику — интерфейсные решения.
            Кроме того, такое разделение позволяет использовать различные инструменты для реализации
            внутренней и внешней части системы, более эффективные для соответствующих задач.
            Например, в веб-разработке к технологиям фронтенда относятся HTML, CSS, JavaScript; а
            бэкенд может быть реализован на PHP, Java, Python, JavaScript (Node.js). Иногда под
            бэкендом в контексте информационных систем понимается административная часть системы
            (включая интерфейс), не отображаемая конечному пользователю, в частности, такая
            терминология используется в системах управления содержимым (в этом случае разделение
            ближе к используемому в сфере организационного управления, где бэк-офис отвечает за
            административные функции, а фронт-офис — за непосредственную работу с заказчиками).
            Профессия фронтенд-разработчика — одна из самых востребованных в IT. Прямо сейчас на
            hh.ru опубликовано почти 3 500 вакансий для фронтендеров.
          </p>
          <div className="text-2xl font-bold ml-7 mt-2">
            Колдонулуучу стектер:
            <span className="text-[#CDA407] font-medium">HTML, CSS, JavaScript;</span>
          </div>

          <div className="flex">
            <Button className="m-auto mt-7  bg-customColor" type="submit">
              Катталуу
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
