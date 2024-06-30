import { BrandsInterface, GoodInterface } from "./interfaces";

export const promoGoods:GoodInterface[] = [
  {
    title: "Картина угольная гора",
    cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
    price: 7500,
    seller: {
      name: "Алексей Солдатов",
    }
  },
  {
    title: "Стул AMS 2104",
    cover: "https://www.ib-gallery.ru/off-line/mebel_file_1/205/205624/file_L.jpg",
    price: 3900,
    seller: {
      name: "Варвара Алексеева",
    }
  },
  {
    title: "Свеча Манго-Базилик",
    cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
    price: 1600,
    seller: {
      name: "Сати Альбертовна",
    }
  },
  {
    title: "Посуда киберпанк",
    cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
    price: 17000,
    seller: {
      name: "Hoven Studio",
    }
  },
]

export const brands:BrandsInterface[] = [
  {name: "Alexey Soldatov",
  },
  {
    name: "Варвара Алексеева"
  },
  {
    name: "Сати Альбертовна",
  },
  {
    name: "Hoven Studio"
  },
  {
    name: "Сергей Пономаренко",
  },
  {
    name: "PAVLINA",
  },
  {
    name: "Иван Муртыгин"
  }
]