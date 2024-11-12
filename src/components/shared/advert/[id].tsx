"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const advers = [
  {
    id: 1,
    name: "Techjol",
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestiae iure nihil adipisci temporibus deleniti, asperiores illo iste laudantium eos esse facilis excepturi et maxime deserunt distinctio quam? Impedit, voluptatibus!`,
    data: "21.09.2020",
  },
  {
    id: 2,
    name: "Techjol",
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, molestiae iure nihil adipisci temporibus deleniti, asperiores illo iste laudantium eos esse facilis excepturi et maxime deserunt distinctio quam? Impedit, voluptatibus!`,
    data: "21.09.2020",
  },
];

const AdvertDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    if (id) {
      const ad = advers.find((item) => item.id === parseInt(id as string, 10));
      setAdvert(ad || null);
    }
  }, [id]);

  if (!advert) {
    return <p>Загрузка или объявление не найдено...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{advert.name}</h1>
      <p className="text-gray-500 mb-2">{advert.data}</p>
      <p className="text-lg text-gray-700">{advert.title}</p>
    </div>
  );
};

export default AdvertDetail;
