import { TermInterface, CategoryInterface, LinkInterface, OptionInterface } from "./interfaces";
import { IconDefinition, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faVk, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import seller1 from "./assets/2024-07-08 23.47.33.jpg";
// import seller2 from "./assets/2024-07-08 23.48.06.jpg";
// import selle3 from "./assets/2024-07-08 23.48.25.jpg";
// import selle4 from "./assets/2024-07-08 23.48.52.jpg";
// import { UserInterface } from "./features/userSlice";
import service1 from "./assets/1269_00005.png";
import service2 from "./assets/1288 _000005.png";
import service3 from "./assets/1289 _00005.png";
// import { text } from "@fortawesome/fontawesome-svg-core";
  
export const links:{icon: IconDefinition, href: string, name: string}[] = [
  {
    icon: faPaperPlane,
    href: "google.com",
    name: "Telegram",
  },
  {
    icon: faVk,
    href: "vk.com",
    name: "VK"
  },
  {
    icon: faWhatsapp,
    href: "whatsapp.com",
    name: "Whatsapp"
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

export const terms:TermInterface[] = [
  {
    question: "Доставка",
    answer: "Мы используем партнера СДЭК для доставки как в пределах Москвы, так и по всем регионам России"
  },
  {
    question: "Гарантия",
    answer: "Гарантия на товары распространяется до получения товара, далее все вопросы по товарам перенаправляются продавцу"
  },
  {
    question: "Страхование",
    answer: "Наш партнер СДЭК предоставляет услугу доставки товаров при транспортировке, что позволяет при ЧП или причинени вреда товару вернуть деньги"
  }
];

export const categories:CategoryInterface[] = [
  {
    title: "Услуги",
    cover: "",
    subcategories: [],
  },
  {
    title: "Свет",
    cover: "https://cdn.mohen-tohen.ru/свет_1.png",
    subcategories: ["Настольные лампы", "Торшеры", "Бра", "Подвесные светильники", "Декоративный свет", "Абажуры"],
    // links: [
    //   {
    //     title: "Лампы",
    //     href: "",
    //   },
    //   {
    //     title: "Люстры",
    //     href: "",
    //   },
    //   {
    //     title: "Наружное освещение",
    //     href: ""
    //   },
    //   {
    //     title: "Настенное освещение",
    //     href: "",
    //   },
    //   {
    //     title: "Настольное освещение",
    //     href: "",
    //   }
    // ],
    // designers: [
    //   {
    //     title: "Алексей Солдатов",
    //     href: "",
    //   },
    //   {
    //     title: "Варвара Алексеева",
    //     href: "",
    //   },
    //   {
    //     title: "Сати Альбретовна",
    //     href: "",
    //   }
    // ]
  },
  {
    title: "Декор",
    cover: "https://cdn.mohen-tohen.ru/декор_1.png",
    subcategories: ["Домашний декор", "Настенный декор"]
    // links: [
    //   {
    //     title: "Скульптуры",
    //     href: "",
    //   },
    //   {
    //     title: "Вазы",
    //     href: "",
    //   },
    //   {
    //     title: "Подсвечники",
    //     href: ""
    //   },
    // ],
    // designers: [
    //   {
    //     title: "Андрей Зиновьев",
    //     href: ""
    //   },
    //   {
    //     title: "Sergey Sergo",
    //     href: "",
    //   },
    //   {
    //     title: "Le Gontieux",
    //     href: "",
    //   }
    // ]
  },
  // {
  //   title: "Настенный декор",
  //   links: [
  //     {
  //       title: "Картины",
  //       href: "",
  //     },
  //     {
  //       title: "Принты",
  //       href: "",
  //     },
  //     {
  //       title: "Фотографии",
  //       href: ""
  //     },
  //   ],
  //   designers: [
  //     {
  //       title: "Alice Kroops",
  //       href: "",
  //     },
  //     {
  //       title: "Маша Каша",
  //       href: "",
  //     },
  //     {
  //       title: "Andrey Daukshis",
  //       href: "",
  //     },
  //     {
  //       title: "Daria Zhezher",
  //       href: "",
  //     }
  //   ]
  // },
  // {
  //   title: "Спа, ванна, ароматы для дома",
  //   links: [
  //     {
  //       title: "Свечи",
  //       href: "",
  //     },
  //     {
  //       title: "Диффузоры",
  //       href: "",
  //     },
  //     {
  //       title: "Саше",
  //       href: ""
  //     },
  //   ],
  //   designers: [
  //     {
  //       title: "Сати Альбретовна",
  //       href: "",
  //     }
  //   ]
  // },
  {
    title: "Текстиль",
    cover: "https://cdn.mohen-tohen.ru/текстиль_1.png",
    subcategories: ["Подушки и чехлы", "Шторы", "Ковры", "Пледы и покрывала"],
    // links: [
    //   {
    //     title: "Ковры",
    //     href: "",
    //   },
    //   {
    //     title: "Постельное белье",
    //     href: "",
    //   },
    //   {
    //     title: "Пледы",
    //     href: ""
    //   },
    // ],
    // designers: [
    //   {
    //     title: "Stiff Boots",
    //     href: "",
    //   },
    //   {
    //     title: "Elektrozavod",
    //     href: "",
    //   },
    //   {
    //     title: "Байкал",
    //     href: "",
    //   }
    // ]
  },
  {
    title: 'Мебель',
    cover: "https://cdn.mohen-tohen.ru/мебель_1.png",
    subcategories: ["Хранение", "Декоративные элементы", "Мягкая мебель", "Столы", "Стулья", "Фурнитура"]
    // links: [
      
    // ],
    // designers: [

    // ]
  },
  {
    title: 'Сервировка',
    cover: "https://cdn.mohen-tohen.ru/Сервировка_1.png",
    subcategories: ["Графины и кувшины", "Подносы и подставки", "Чашки и стаканы", "Тарелки и миски"]
    // links: [
      
    // ],
    // designers: [

    // ]
  },
  {
    title: 'Атмосфера',
    cover: "https://cdn.mohen-tohen.ru/атмосфера_1.png",
    subcategories: ["Свечи", "Диффузоры", "Арома-лампы"]
    // links: [
      
    // ],
    // designers: [

    // ]
  },
  {
    title: 'Подарки',
    cover: "https://cdn.mohen-tohen.ru/Подарки_1.png",
    subcategories: ["Наборы 'сделай сам'", "Авторские открытки", "Подарочные наборы"]
    // links: [
      
    // ],
    // designers: [

    // ]
  },

  // {
  //   title: 'Идеи',
  //   cover: "https://cdn.mohen-tohen.ru/Идеи_1.png"
  //   // links: [
      
  //   // ],
  //   // designers: [

  //   // ]
  // },
  // {
  //   title: 'Услуги',
  //   cover: "https://cdn.mohen-tohen.ru/услуги_1.png",
  //   subcategories: [""]
  //   // links: [
      
  //   // ],
  //   // designers: [

  //   // ]
  // },
];

export const subcategories:string[] = [
  "Кувшины",
  "Подносы",
  "Чашки, стаканы, бокалы",
  "Тарелки, миски, блюда",
  "Подсвечники",
  "Вазы и кашпо",
  "Скульптуры",
  "Картины",
  "Панно",
  "Постеры",
  "Зеркала",
  "Свет",
  "Текстиль",
  "Хранение",
  "Декоративные элементы",
  "Мягкая мебель",
  "Столы, стулья",
  "Авторские открытки",
  "Подарочные наборы",
  "Cвечи и арома-лампы"
]

export const fixedHeaderLinks:LinkInterface[] = [
  {
    title: "Декорирование на заказ",
    href: "../homestaging"
  },
  {
    title: "Подарочные сертификаты",
    href: "../gifts",
  },
  {
    title: "Набобры сделай сам",
    href: "../diy",
  }
];

export const accountLinks:LinkInterface[] = [
  {
    title: "Избранное",
    href: "favs"
  },
  {
    title: "История",
    href: "history"
  },
];

export const accountSellerLinks:LinkInterface[] = [
  {
    title: "История",
    href: "history"
  },
  {
    title: "Мои товары",
    href: "mygoods",
  },
  {
    title: "Избранное",
    href: "favs"
  },
];

export const inquerySellSelect: OptionInterface[] = [
  {
    id: "да",
    label: "Да"
  },
  {
    id: "нет",
    label: "Нет"
  }
];

export const applicationCitySelect:OptionInterface[] = [
  {
    id: "moscow",
    label: "Москва"
  },
  {
    id: "spb",
    label: "Санкт-Петербург"
  },
];

export const applicationCategoriesSelect:OptionInterface[] = [
  {
    id: "light",
    label: "Свет"
  },
  {
    label: "Декор",
    id: "decore",
  },
  {
    label: "Текстиль",
    id: "textile",
  },
  {
    label: "Мебель",
    id: "furniture",
  },
  {
    label: "Сервировка",
    id: "dishes"
  },
  {
    label: "Атмосфера",
    id: "atmosphere"
  },
  {
    label: "Подарки",
    id: "gifts"
  },
];

export const applicationStockSelect:OptionInterface[] = [
  {
    id: "1",
    label: "Один"
  },
  {
    id: "1-10",
    label: "От 1 до 10"
  },
  {
    id: "10-20",
    label: "От 10 до 20"
  },
  {
    id: "20+",
    label: "Больше 20"
  }
];

export const applicationSizeSelect:OptionInterface[] = [
  {
    id: "Малый",
    label: "Малые габариты"
  },
  {
    id: "Средний",
    label: "Средние габариты"
  },
  {
    id: "Большой",
    label: "Большие габариты"
  },
];

export const applicationProdTimeSelect:OptionInterface[] = [
  {
    id: "1-5",
    label: "От 1 до 5 дней"
  },
  {
    id: "6-10",
    label: "От 6 до 10 дней"
  },
  {
    id: "11-15",
    label: "От 11 до 15 дней",
  },
  {
    id: "15-20",
    label: "От 15 до 20 дней"
  },
  {
    id: "20-25",
    label: "От 20 до 25 дней"
  },
  {
    id: "25-30",
    label: "От 25 до 35 дней"
  },
];

export const homestagingServices: {title: string, descirption: string, cover: string}[]= [
  {title: "Создание декор-концепции", descirption: "Профессиональное решение для помещений, требующих только минимального вмешательства, с акцентом на стильное декорирование и преображение пространство и подчеркнуть его лучшие качества.", cover: service1},
  {title: "Косметический ремонт", descirption: "Выполнение мелких ремонтных работ, чтобы придать помещению свежий и современный вид без необходимости проведения капитальных ремонтных работ.", cover: service2},
  {title: "Капитальный ремонт", descirption: "Комплексное обновление вашего интерьера, включающее все необходимые работы для создания стильного и функционального пространства, с учетом вашего бюджета и предпочтений.", cover: service3},
];

export const questions:{
  question: string,
  answer: string,
}[] = [
  {
    question: "Зачем нужен хоумстэйджинг?", 
    answer: "Хоумстэйджинг помогает повысить рыночную стоимость вашего помещения до 30% и делает его более привлекательным для покупателей или арендаторов. Это ведет к большему спросу на ваше жилье и снижает время на его продажу или аренду, так как потенциальные клиенты быстрее заинтересуются качественно оформленным пространством."
  },
  {
    question: "Как долго длится процесс хоумстэйджинга?",
    answer: "Продолжительность процесса зависит от состояния вашего помещения и объема необходимых работ. В среднем, полный процесс хоумстэйджинга занимает от нескольких недель до месяца."
  },
  {
    question: "Как мы определяем стоимость услуг?",
    answer: "Стоимость наших услуг рассчитывается на основе объема работы и сложности проекта. Мы предоставляем подробное коммерческое предложение после консультации и анализа вашего объекта."
  },
  {
    question: "Что делать, если мой бюджет ограничен?",
    answer: "Мы можем предложить оптимальные решения в рамках вашего бюджета, сосредоточив внимание на самых эффективных и бюджетных способах улучшения вашего интерьера.",
  },
  {
    question: "Могу ли я участвовать в процессе декорирования?",
    answer: "Конечно! Мы рады учитывать ваши пожелания и идеи на всех этапах работы. Ваше участие поможет создать интерьер, который будет полностью соответствовать вашим вкусам и потребностям.",
  },
  {
    question: "Почему я должен вам доверять?",
    answer: "Мы — команда профессионалов с опытом работы в дизайне интерьеров и архитектуре более 15 лет. Наши специалисты включают архитекторов, дизайнеров и декораторов, которые гарантируют высокое качество и индивидуальный подход к каждому проекту. Мы успешно реализовали множество проектов и знаем, как сделать ваше пространство максимально привлекательным для покупателей или арендаторов.",
  },
];

export const stepsOfProcess:{title: string, descirption: string}[] = [
  {
    title: "Консультация и брифинг заказчика",
    descirption: "Первая встреча с клиентом для обсуждения потребностей и целей. Сбор информации о объекте, ожиданиях клиента и бюджетных ограничениях."
  }, 
  {
    title: "Коммерческое предложение",
    descirption: "На основе брифа создается подробное КП с описанием услуг, сроков и стоимости. Обмеры и фотофиксация объекта для дальнейшей работы"
  },
  {
    title: "Экспертиза от архитекторов",
    descirption: "Проводим оценку состояния объекта и возможных улучшений, анализируя рынок и цены на аналогичные объекты. (Общаемся с риелторами для получения рекомендаций и экспертной оценки.)"
  },
  {
    title: "Создание альбома декор-концепции",
    descirption: "Разрабатываем концепцию декора с подбором мебели, освещения и аксессуаров. У вас на руках будет готовый дизайн-альбом с предложенными решениями."
  },
  {
    title: "Примерка декора",
    descirption: "Выезд нашего декоратора на объект для примерки и окончательного согласования декора. Расстановка мебели, аксессуаров и элементов декора в соответствии с разработанной концепцией."
  },
  {
    title: "Подготовка пространства под ключ", 
    descirption: "Комплексная подготовка пространства для фотосессий и презентаций: уборка и цветочные композиции для создания идеальной атмосферы."
  }
]

// export const baseApi = "https://api.mohen-tohen.ru";
export const baseApi = "http://localhost:3000";

export const recipientInputs = [{
  name: "name",
  placeHolder: "Иван Алексеев",
  type: "text",
  text: "",
},
{
  name: "phone",
  placeHolder: "+79031513045",
  type: "text",
  text: "",
}]

export const locationInputs = [
  {
    name: "address",
    placeHolder: "Москва, улица Пушкина, дом Колотушкина",
    type: "text",
    text: "",
  },
  {
    name: "flat",
    placeHolder: "Квартира 34",
    type: "text",
    text: "",
  }
];

export const welcomeSlides = [
  {
    text: "Новая коллекция керамики из серии Просторы",
    cover: "https://cdn.mohen-tohen.ru/КОЛЛЕКЦИЯ_11.png"
  }, 
  {
    text: "Запись на мастер-класс по рисунку в хужожественную студию",
    cover: "https://cdn.mohen-tohen.ru/МК_11.png",
  },
  {
    text: "Открытый урок по гончарному мастерству для начинающих",
    cover: "https://cdn.mohen-tohen.ru/МК_22.png"
  },
  {
    text: "Керамические вазы из серии Тихое место",
    cover: "https://cdn.mohen-tohen.ru/вазы.png"
  },
  {
    text: "Сезонная распродажа",
    cover: "https://cdn.mohen-tohen.ru/СКИДКА_22.png"
  }
];

export const commonColors = [
  "black",
  "white",
  "red",
  "green",
  "yellow",
  "brown",
  "orange",
  "blue",
  "violet",
]