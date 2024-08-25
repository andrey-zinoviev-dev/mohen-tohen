import { BrandsInterface, DimensionTranslateInterface, GoodInterface, TermInterface, CategoryInterface, LinkInterface, OptionInterface } from "./interfaces";
import { IconDefinition, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faVk, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import seller1 from "./assets/2024-07-08 23.47.33.jpg";
import seller2 from "./assets/2024-07-08 23.48.06.jpg";
import selle3 from "./assets/2024-07-08 23.48.25.jpg";
import selle4 from "./assets/2024-07-08 23.48.52.jpg";
import { UserInterface } from "./features/userSlice";
import service1 from "./assets/1269_00005.png";
import service2 from "./assets/1288 _000005.png";
import service3 from "./assets/1289 _00005.png";

// export const promoGoods:GoodInterface[] = [
//   {
//     title: "Картина угольная гора",
//     cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
//     price: 7500,
//     dimensions: {
//       width: 180,
//       height: 45,
//       depth: 3,
//     },
//     seller: {
//       name: "Алексей Солдатов",
//       cover: seller2,
//       description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//       goodsCollection: [
//         // {
//         //   title: "Картина угольная гора",
//         //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
//         //   price: 7500,
//         //   seller: {
//         //     name: "Алексей Солдатов",
//         //     cover: seller2,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: [
              
//         //     ]
//         //   },
//         //   material: "Акрил",
//         // },
//         // {
//         //   title: "Картина угольная гора",
//         //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
//         //   price: 7500,
//         //   seller: {
//         //     name: "Алексей Солдатов",
//         //     cover: seller2,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: [
              
//         //     ]
//         //   },
//         //   material: "Акрил",
//         // },
//         // {
//         //   title: "Картина угольная гора",
//         //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
//         //   price: 7500,
//         //   seller: {
//         //     name: "Алексей Солдатов",
//         //     cover: seller2,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: [
              
//         //     ]
//         //   },
//         //   material: "Акрил",
//         // },
//         // {
//         //   title: "Картина угольная гора",
//         //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
//         //   price: 7500,
//         //   seller: {
//         //     name: "Алексей Солдатов",
//         //     cover: seller2,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: [
              
//         //     ]
//         //   },
//         //   material: "Акрил",
//         // },
//         // {
//         //   title: "Картина угольная гора",
//         //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
//         //   price: 7500,
//         //   seller: {
//         //     name: "Алексей Солдатов",
//         //     cover: seller2,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: [
              
//         //     ]
//         //   },
//         //   material: "Акрил",
//         // },
//         // {
//         //   title: "Картина угольная гора",
//         //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
//         //   price: 7500,
//         //   seller: {
//         //     name: "Алексей Солдатов",
//         //     cover: seller2,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: [
              
//         //     ]
//         //   },
//         //   material: "Акрил",
//         // },
//         // {
//         //   title: "Картина угольная гора",
//         //   cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
//         //   price: 7500,
//         //   seller: {
//         //     name: "Алексей Солдатов",
//         //     cover: seller2,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: [
              
//         //     ]
//         //   },
//         //   material: "Акрил",
//         // }
//       ]
//     },
//     stock: 2,
//     madeToOrder: false,
//     material: "Акрил",
//   },
//   {
//     title: "Стул AMS 2104",
//     cover: "https://www.ib-gallery.ru/off-line/mebel_file_1/205/205624/file_L.jpg",
//     price: 3900,
//     dimensions: {
//       width: 95,
//       height: 180,
//       depth: 45
//     },
//     seller: {
//       name: "Варвара Алексеева",
//       cover: seller1,
//       description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//       goodsCollection: [
//         // {
//         //   title: "Стул AMS 2104",
//         //   cover: "https://www.ib-gallery.ru/off-line/mebel_file_1/205/205624/file_L.jpg",
//         //   price: 3900,
//         //   seller: {
//         //     name: "Варвара Алексеева",
//         //     cover: seller1,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: [
              
//         //     ]
//         //   },
//         //   dimensions: {
//         //     width: 95,
//         //     height: 180,
//         //     depth: 45
//         //   },
//         //   material: "Хромированная основа"
//         // },
//       ]
//     },
//     stock: 0,
//     madeToOrder: true,
//     material: "Хромированная основа"
//   },
//   {
//     title: "Свеча Манго-Базилик",
//     cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
//     price: 1600,
//     dimensions: {
//       volume: 190,
//     },
//     seller: {
//       name: "Сати Альбертовна",
//       cover: selle3,
//       description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//       goodsCollection: [
//         // {
//         //   title: "Свеча Манго-Базилик",
//         //   cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
//         //   price: 1600,
//         //   dimensions: {
//         //     volume: 250,
//         //     // height: 180,
//         //   },
//         //   seller: {
//         //     name: "Сати Альбертовна",
//         //     cover: selle3,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: []
//         //   },
//         //   material: "Соевый воск"
//         // },
//         // {
//         //   title: "Свеча Манго-Базилик",
//         //   cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
//         //   price: 1600,
//         //   dimensions: {
//         //     volume: 250,
//         //     // height: 180,
//         //   },
//         //   seller: {
//         //     name: "Сати Альбертовна",
//         //     cover: selle3,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: []
//         //   },
//         //   material: "Соевый воск"
//         // },
//         // {
//         //   title: "Свеча Манго-Базилик",
//         //   cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
//         //   price: 1600,
//         //   dimensions: {
//         //     volume: 250,
//         //     // height: 180,
//         //   },
//         //   seller: {
//         //     name: "Сати Альбертовна",
//         //     cover: selle3,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: []
//         //   },
//         //   material: "Соевый воск"
//         // },
//         // {
//         //   title: "Свеча Манго-Базилик",
//         //   cover: "https://extra-v.store/upload/iblock/b97/oy4vzf9lm60aaobna8lt87d0yitwc0nm.jpg",
//         //   price: 1600,
//         //   dimensions: {
//         //     volume: 250,
//         //     // height: 180,
//         //   },
//         //   seller: {
//         //     name: "Сати Альбертовна",
//         //     cover: selle3,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: []
//         //   },
//         //   material: "Соевый воск"
//         // },
//       ]
//     },
//     candle: true,
//     material: "Соевый воск",
//     stock: 3,
//     madeToOrder: false,
//   },
//   {
//     title: "Посуда киберпанк",
//     cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
//     price: 17000,
//     dimensions: {
//       width: 30,
//       height: 5,
//       depth: 5,
//       diameter: 45,
//     },
//     seller: {
//       name: "Hoven Studio",
//       cover: selle4,
//       description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//       goodsCollection: [
//         // {
//         //   title: "Посуда киберпанк",
//         //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
//         //   price: 17000,
//         //   seller: {
//         //     name: "Hoven Studio",
//         //     cover: selle4,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: [
              
//         //     ]
//         //   },
//         //   material: "Керамика",
//         //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
//         // },
//         // {
//         //   title: "Посуда киберпанк",
//         //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
//         //   price: 17000,
//         //   seller: {
//         //     name: "Hoven Studio",
//         //     cover: selle4,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: [
              
//         //     ]
//         //   },
//         //   material: "Керамика",
//         //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
//         // },
//         // {
//         //   title: "Посуда киберпанк",
//         //   cover: "https://i.pinimg.com/564x/79/e6/84/79e684d7caf173adc6ddb865fcd53944.jpg",
//         //   price: 17000,
//         //   seller: {
//         //     name: "Hoven Studio",
//         //     cover: selle4,
//         //     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         //     goodsCollection: [
              
//         //     ]
//         //   },
//         //   material: "Керамика",
//         //   colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}]
//         // },
//       ]
//     },
//     material: "Керамика",
//     colors: [{title:"угольный", colorCode: "#20232c"}, {title: "черный", colorCode: "black"}, {title: "золотой", colorCode: "#E7B462"}, {title: "коралловый", colorCode: "#D96363"}],
//     stock: 4,
//     madeToOrder: false,
//   },
// ];

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

// export const brands:BrandsInterface[] = [
//   {
//     name: "Alexey Soldatov",
//     cover: seller1,
//     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//     goodsCollection: [
//       {
//         title: "Картина угольная гора",
//         cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
//         price: 7500,
//         dimensions: {
//           width: 180,
//           height: 45,
//         },
//         seller: {
//           name: "Алексей Солдатов",
//           cover: seller2,
//           description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//           goodsCollection: [
            
//           ]
//         },
//         material: "Акрил",
//         stock: 4,
//         madeToOrder: false,
//       },
//     ],
//   },
//   {
//     name: "Варвара Алексеева",
//     cover: seller2,
//     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",

//   },
//   {
//     name: "Сати Альбертовна",
//     cover: selle3,
//     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",

//   },
//   {
//     name: "Hoven Studio",
//     cover: selle4,
//     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",

//   },
//   {
//     name: "Сергей Пономаренко",
//     cover: seller1,
//     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",

//   },
//   {
//     name: "PAVLINA",
//     cover: seller2,
//     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//   },
//   {
//     name: "Иван Муртыгин",
//     cover: selle3,
//     description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//   }
// ];

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
    ],
    designers: [
      {
        title: "Алексей Солдатов",
        href: "",
      },
      {
        title: "Варвара Алексеева",
        href: "",
      },
      {
        title: "Сати Альбретовна",
        href: "",
      }
    ]
  },
  {
    title: "Декор",
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
    ],
    designers: [
      {
        title: "Андрей Зиновьев",
        href: ""
      },
      {
        title: "Sergey Sergo",
        href: "",
      },
      {
        title: "Le Gontieux",
        href: "",
      }
    ]
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
    ],
    designers: [
      {
        title: "Stiff Boots",
        href: "",
      },
      {
        title: "Elektrozavod",
        href: "",
      },
      {
        title: "Байкал",
        href: "",
      }
    ]
  },
  {
    title: 'Мебель',
    links: [
      
    ],
    designers: [

    ]
  },
  {
    title: 'Сервировка',
    links: [
      
    ],
    designers: [

    ]
  },
  {
    title: 'Атмосфера',
    links: [
      
    ],
    designers: [

    ]
  },
  {
    title: 'Подарки',
    links: [
      
    ],
    designers: [

    ]
  },
  {
    title: 'Идеи',
    links: [
      
    ],
    designers: [

    ]
  },
  {
    title: 'Услуги',
    links: [
      
    ],
    designers: [

    ]
  },
];

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

// export const buyerUser:UserInterface = {
//   name: "Алексей Солдатов",
//   loggedIn: true,
//   phone: "+79031513045",
//   email: "alexey2194@mail.ru",
//   favourites: [
    
//   ],
//   seller: false,
//   history: [
//     {
//       title: "Картина угольная гора",
//       cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
//       price: 7500,
//       dimensions: {
//         width: 180,
//         height: 45,
//       },
//       seller: {
//         name: "Алексей Солдатов",
//         cover: seller2,
//         description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         goodsCollection: [
          
//         ]
//       },
//       quantity: 1,
//       material: "Акрил",
//       stock: 4, 
//       madeToOrder: false,
//     },
//     {
//       title: "Картина угольная гора",
//       cover: "https://media.istockphoto.com/id/1270760632/photo/honister-pass-in-lake-district-cumbria-uk.jpg?s=612x612&w=0&k=20&c=G0_penqUEzFwfdaTUlBiRO_-loL7HkcqXtCIiCaebAI=",
//       price: 7500,
//       dimensions: {
//         width: 180,
//         height: 45,
//       },
//       seller: {
//         name: "Алексей Солдатов",
//         cover: seller2,
//         description: "Уникальный художник-визионер Алексей Солдатов вобрал в себя техники работы со светом Караваджо и с формами Кандинского. Уникальный творец Херсонской улицы",
//         goodsCollection: [
          
//         ]
//       },
//       quantity: 1,
//       material: "Акрил",
//       stock: 4, 
//       madeToOrder: false,
//     },
//   ]
// };

// export const sellerUser:UserInterface = {
//   name: "Сергей Ильич",
//   loggedIn: true,
//   phone: "+79269311555",
//   email: "super_whore@mail.ru",
//   favourites: [],
//   seller: true,
//   goodsCollection: [],
//   history: [],
// };

export const accountLinks:LinkInterface[] = [
  {
    title: "Избранное",
    href: "favs"
  },
  {
    title: "История",
    href: "history"
  },
  // {
  //   title: "Настройки",
  //   href: "prefs"
  // }
];

export const accountSellerLinks:LinkInterface[] = [
  // {
  //   title: "Избранное",
  //   href: "favs"
  // },
  // {
  //   title: "История продаж",
  //   href: "history"
  // },
  {
    title: "Мои товары",
    href: "mygoods",
  },
  // {
  //   title: "Настройки",
  //   href: "prefs"
  // }
].concat(accountLinks);

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

export const baseApi = "http://localhost:3001";
