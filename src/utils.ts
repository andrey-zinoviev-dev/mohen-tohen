import { BrandsInterface, GoodInterface } from "./interfaces";
import { IconDefinition, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";
export const promoGoods:GoodInterface[] = [
  {
    title: "Картина угольная гора",
    cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
    price: 7500,
    seller: {
      name: "Алексей Солдатов",
    },
    material: "Акрил",
    width: [180],
  },
  {
    title: "Стул AMS 2104",
    cover: "https://www.ib-gallery.ru/off-line/mebel_file_1/205/205624/file_L.jpg",
    price: 3900,
    seller: {
      name: "Варвара Алексеева",
    },
    material: "Хромированная основа"
  },
  {
    title: "Свеча Манго-Базилик",
    cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
    price: 1600,
    seller: {
      name: "Сати Альбертовна",
    },
    material: "Соевый воск"
  },
  {
    title: "Посуда киберпанк",
    cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
    price: 17000,
    seller: {
      name: "Hoven Studio",
    },
    material: "Керамика",
    colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
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
];

export const links:{icon: IconDefinition, href: string, name: string}[] = [
  {
    icon: faPaperPlane,
    href: "google.com",
    name: "Whatsapp",
  },
  {
    icon: faVk,
    href: "vk.com",
    name: "VK"
  }
];

export const commonLinks: {href: string, name: string}[] = [
  {
    href: "",
    name: "Политика обработки пероснальных данных"
  },
  {
    href: "",
    name: "Политика конфиденциальности"
  },
  {
    href: "",
    name: "Сотрудничество"
  },
  {
    href: "",
    name: "Мероприятия"
  },
  {
    href: "",
    name: "Часто задаваемые вопросы"
  },
];

export const buyerLinks:{href: string, name: string}[] = [
  {
    href: "",
    name: "Почему нет самовывоза"
  },
  {
    href: "",
    name: "Доставка и оплата"
  },
  {
    href: "",
    name: "Возврат"
  }
]

export const sellerLinks:{href: string, name: string}[] = [
  {
    href: "",
    name: "Личный кабинет"
  },
  {
    href: "",
    name: "Соглашение с партнерами о доставке"
  },
  {
    href: "",
    name: "Производство на мощностях платформы"
  },
  {
    href: "",
    name: "Система честной сделки"
  }
]