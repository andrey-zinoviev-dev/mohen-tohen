import { BrandsInterface, DimensionTranslateInterface, GoodInterface, TermInterface, CategoryInterface } from "./interfaces";
import { IconDefinition, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import seller1 from "./assets/2024-07-08 23.47.33.jpg";
import seller2 from "./assets/2024-07-08 23.48.06.jpg";
import selle3 from "./assets/2024-07-08 23.48.25.jpg";
import selle4 from "./assets/2024-07-08 23.48.52.jpg";

export const promoGoods:GoodInterface[] = [
  {
    title: "Картина угольная гора",
    cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
    price: 7500,
    dimensions: {
      width: 180,
      height: 45,
      depth: 3,
    },
    seller: {
      name: "Алексей Солдатов",
      cover: seller2,
      description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
      goodsCollection: [
        // {
        //   title: "Картина угольная гора",
        //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
        //   price: 7500,
        //   seller: {
        //     name: "Алексей Солдатов",
        //     cover: seller2,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: [
              
        //     ]
        //   },
        //   material: "Акрил",
        // },
        // {
        //   title: "Картина угольная гора",
        //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
        //   price: 7500,
        //   seller: {
        //     name: "Алексей Солдатов",
        //     cover: seller2,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: [
              
        //     ]
        //   },
        //   material: "Акрил",
        // },
        // {
        //   title: "Картина угольная гора",
        //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
        //   price: 7500,
        //   seller: {
        //     name: "Алексей Солдатов",
        //     cover: seller2,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: [
              
        //     ]
        //   },
        //   material: "Акрил",
        // },
        // {
        //   title: "Картина угольная гора",
        //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
        //   price: 7500,
        //   seller: {
        //     name: "Алексей Солдатов",
        //     cover: seller2,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: [
              
        //     ]
        //   },
        //   material: "Акрил",
        // },
        // {
        //   title: "Картина угольная гора",
        //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
        //   price: 7500,
        //   seller: {
        //     name: "Алексей Солдатов",
        //     cover: seller2,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: [
              
        //     ]
        //   },
        //   material: "Акрил",
        // },
        // {
        //   title: "Картина угольная гора",
        //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
        //   price: 7500,
        //   seller: {
        //     name: "Алексей Солдатов",
        //     cover: seller2,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: [
              
        //     ]
        //   },
        //   material: "Акрил",
        // },
        // {
        //   title: "Картина угольная гора",
        //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
        //   price: 7500,
        //   seller: {
        //     name: "Алексей Солдатов",
        //     cover: seller2,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: [
              
        //     ]
        //   },
        //   material: "Акрил",
        // }
      ]
    },
    stock: 2,
    madeToOrder: false,
    material: "Акрил",
  },
  {
    title: "Стул AMS 2104",
    cover: "https://www.ib-gallery.ru/off-line/mebel_file_1/205/205624/file_L.jpg",
    price: 3900,
    dimensions: {
      width: 95,
      height: 180,
      depth: 45
    },
    seller: {
      name: "Варвара Алексеева",
      cover: seller1,
      description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
      goodsCollection: [
        // {
        //   title: "Стул AMS 2104",
        //   cover: "https://www.ib-gallery.ru/off-line/mebel_file_1/205/205624/file_L.jpg",
        //   price: 3900,
        //   seller: {
        //     name: "Варвара Алексеева",
        //     cover: seller1,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: [
              
        //     ]
        //   },
        //   dimensions: {
        //     width: 95,
        //     height: 180,
        //     depth: 45
        //   },
        //   material: "Хромированная основа"
        // },
      ]
    },
    stock: 0,
    madeToOrder: true,
    material: "Хромированная основа"
  },
  {
    title: "Свеча Манго-Базилик",
    cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
    price: 1600,
    dimensions: {
      volume: 190,
    },
    seller: {
      name: "Сати Альбертовна",
      cover: selle3,
      description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
      goodsCollection: [
        // {
        //   title: "Свеча Манго-Базилик",
        //   cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
        //   price: 1600,
        //   dimensions: {
        //     volume: 250,
        //     // height: 180,
        //   },
        //   seller: {
        //     name: "Сати Альбертовна",
        //     cover: selle3,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: []
        //   },
        //   material: "Соевый воск"
        // },
        // {
        //   title: "Свеча Манго-Базилик",
        //   cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
        //   price: 1600,
        //   dimensions: {
        //     volume: 250,
        //     // height: 180,
        //   },
        //   seller: {
        //     name: "Сати Альбертовна",
        //     cover: selle3,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: []
        //   },
        //   material: "Соевый воск"
        // },
        // {
        //   title: "Свеча Манго-Базилик",
        //   cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
        //   price: 1600,
        //   dimensions: {
        //     volume: 250,
        //     // height: 180,
        //   },
        //   seller: {
        //     name: "Сати Альбертовна",
        //     cover: selle3,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: []
        //   },
        //   material: "Соевый воск"
        // },
        // {
        //   title: "Свеча Манго-Базилик",
        //   cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
        //   price: 1600,
        //   dimensions: {
        //     volume: 250,
        //     // height: 180,
        //   },
        //   seller: {
        //     name: "Сати Альбертовна",
        //     cover: selle3,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: []
        //   },
        //   material: "Соевый воск"
        // },
      ]
    },
    candle: true,
    material: "Соевый воск",
    stock: 3,
    madeToOrder: false,
  },
  {
    title: "Посуда киберпанк",
    cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
    price: 17000,
    dimensions: {
      width: 30,
      height: 5,
      depth: 5,
      diameter: 45,
    },
    seller: {
      name: "Hoven Studio",
      cover: selle4,
      description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
      goodsCollection: [
        // {
        //   title: "Посуда киберпанк",
        //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
        //   price: 17000,
        //   seller: {
        //     name: "Hoven Studio",
        //     cover: selle4,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: [
              
        //     ]
        //   },
        //   material: "Керамика",
        //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
        // },
        // {
        //   title: "Посуда киберпанк",
        //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
        //   price: 17000,
        //   seller: {
        //     name: "Hoven Studio",
        //     cover: selle4,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: [
              
        //     ]
        //   },
        //   material: "Керамика",
        //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
        // },
        // {
        //   title: "Посуда киберпанк",
        //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
        //   price: 17000,
        //   seller: {
        //     name: "Hoven Studio",
        //     cover: selle4,
        //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
        //     goodsCollection: [
              
        //     ]
        //   },
        //   material: "Керамика",
        //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
        // },
      ]
    },
    material: "Керамика",
    colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}],
    stock: 4,
    madeToOrder: false,
  },
];

export const commonGoods:GoodInterface[] = [
  // {
  //   title: "Картина угольная гора",
  //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
  //   price: 7500,
  //   dimensions: {
  //     width: 180,
  //     height: 45,
  //   },
  //   seller: {
  //     name: "Алексей Солдатов",
  //     cover: seller2,
  //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
  //     goodsCollection: [
        
  //     ]
  //   },
  //   material: "Акрил",
  // },
  // {
  //   title: "Картина угольная гора",
  //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
  //   price: 7500,
  //   dimensions: {
  //     width: 180,
  //     height: 45,
  //   },
  //   seller: {
  //     name: "Алексей Солдатов",
  //     cover: seller2,
  //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
  //     goodsCollection: [
        
  //     ]
  //   },
  //   material: "Акрил",
  // },
  // {
  //   title: "Картина угольная гора",
  //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
  //   price: 7500,
  //   dimensions: {
  //     width: 180,
  //     height: 45,
  //   },
  //   seller: {
  //     name: "Алексей Солдатов",
  //     cover: seller2,
  //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
  //     goodsCollection: [
        
  //     ]
  //   },
  //   material: "Акрил",
  // },
  // {
  //   title: "Картина угольная гора",
  //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
  //   price: 7500,
  //   dimensions: {
  //     width: 180,
  //     height: 45,
  //   },
  //   seller: {
  //     name: "Алексей Солдатов",
  //     cover: seller2,
  //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
  //     goodsCollection: [
        
  //     ]
  //   },
  //   material: "Акрил",
  // },
  // {
  //   title: "Посуда киберпанк",
  //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
  //   price: 17000,
  //   dimensions: {
  //     width: 30,
  //     height: 5,
  //     depth: 5,
  //     diameter: 45,
  //   },
  //   seller: {
  //     name: "Hoven Studio",
  //     cover: selle4,
  //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
  //     goodsCollection: [
        
  //     ]
  //   },
  //   material: "Керамика",
  //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
  // },
  // {
  //   title: "Посуда киберпанк",
  //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
  //   price: 17000,
  //   dimensions: {
  //     width: 30,
  //     height: 5,
  //     depth: 5,
  //     diameter: 45,
  //   },
  //   seller: {
  //     name: "Hoven Studio",
  //     cover: selle4,
  //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
  //     goodsCollection: [
        
  //     ]
  //   },
  //   material: "Керамика",
  //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
  // },
  // {
  //   title: "Посуда киберпанк",
  //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
  //   price: 17000,
  //   dimensions: {
  //     width: 30,
  //     height: 5,
  //     depth: 5,
  //     diameter: 45,
  //   },
  //   seller: {
  //     name: "Hoven Studio",
  //     cover: selle4,
  //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
  //     goodsCollection: [
        
  //     ]
  //   },
  //   material: "Керамика",
  //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
  // },
  // {
  //   title: "Посуда киберпанк",
  //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
  //   price: 17000,
  //   dimensions: {
  //     width: 30,
  //     height: 5,
  //     depth: 5,
  //     diameter: 45,
  //   },
  //   seller: {
  //     name: "Hoven Studio",
  //     cover: selle4,
  //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
  //     goodsCollection: [
        
  //     ]
  //   },
  //   material: "Керамика",
  //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
  // },
  // {
  //   title: "Посуда киберпанк",
  //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
  //   price: 17000,
  //   dimensions: {
  //     width: 30,
  //     height: 5,
  //     depth: 5,
  //     diameter: 45,
  //   },
  //   seller: {
  //     name: "Hoven Studio",
  //     cover: selle4,
  //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
  //     goodsCollection: [
        
  //     ]
  //   },
  //   material: "Керамика",
  //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
  // },
  // {
  //   title: "Посуда киберпанк",
  //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
  //   price: 17000,
  //   dimensions: {
  //     width: 30,
  //     height: 5,
  //     depth: 5,
  //     diameter: 45,
  //   },
  //   seller: {
  //     name: "Hoven Studio",
  //     cover: selle4,
  //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
  //     goodsCollection: [
        
  //     ]
  //   },
  //   material: "Керамика",
  //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
  // },
];

export const brands:BrandsInterface[] = [
  {
    name: "Alexey Soldatov",
    cover: seller1,
    description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
    goodsCollection: [

    ]
  },
  {
    name: "Варвара Алексеева",
    cover: seller2,
    description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы"

  },
  {
    name: "Сати Альбертовна",
    cover: selle3,
    description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы"

  },
  {
    name: "Hoven Studio",
    cover: selle4,
    description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы"

  },
  {
    name: "Сергей Пономаренко",
    cover: seller1,
    description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы"

  },
  {
    name: "PAVLINA",
    cover: seller2,
    description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы"

  },
  {
    name: "Иван Муртыгин",
    cover: selle3,
    description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы"
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

export const dimensionTranslations:DimensionTranslateInterface[] = [
  {
    title: "width",
    translation: "ширина",
    unit: "см"
  },
  {
    title: "height",
    translation: "высота",
    unit: "см"

  },
  {
    title: "volume",
    translation: "объем",
    unit: "мл"

  },
  {
    title: "depth",
    translation: "глубина",
    unit: "см"

  },
  {
    title: "diameter",
    translation: "диаметр",
    unit: "см"
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
  // {
  //   title: "Мебель",
  //   links: [
  //     {title:}
  //   ]
  // }
  // "Мебель",
  // "Свет",
  // "Декор",
  // "Винтаж",
  // "Декорирование"
  {
    title: "Свет",
    links: [
      {
        title: "Лампы",
        href: "",
      },
      {
        title: "Люстры",
        href: "",
      },
      {
        title: "Наружное освещение",
        href: ""
      },
      {
        title: "Настенное освещение",
        href: "",
      },
      {
        title: "Настольное освещение",
        href: "",
      }
    ]
  },
  {
    title: "Домашний декор",
    links: [
      {
        title: "Скульптуры",
        href: "",
      },
      {
        title: "Вазы",
        href: "",
      },
      {
        title: "Подсвечники",
        href: ""
      },
    ]
  },
  {
    title: "Настенный декор",
    links: [
      {
        title: "Картины",
        href: "",
      },
      {
        title: "Принты",
        href: "",
      },
      {
        title: "Фотографии",
        href: ""
      },
    ]
  },
  {
    title: "Спа, ванна, ароматы для дома",
    links: [
      {
        title: "Свечи",
        href: "",
      },
      {
        title: "Диффузоры",
        href: "",
      },
      {
        title: "Саше",
        href: ""
      },
    ]
  },
  {
    title: "Текстиль, кожа",
    links: [
      {
        title: "Ковры",
        href: "",
      },
      {
        title: "Постельное белье",
        href: "",
      },
      {
        title: "Пледы",
        href: ""
      },
    ]
  }
];

export const fixedHeaderLinks:string[] = [
  "Декорирование на заказ",
  "Подарочные сертификаты",
  "Наборы сделай сам",
];