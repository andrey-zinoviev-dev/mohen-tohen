export interface ColorInterface  {
  title: string, 
  colorCode: string
}

export interface DimensionsInterface {
  // height?: number,
  // width?: number,
  // depth?: number,
  // diameter?: number,
  // volume?: number,
  [key: string]: number,
}

export interface DimensionTranslateInterface {
  title: string,
  translation: string,
  unit: string,
}

export interface ColorsInterface {
  colors: ColorInterface[],
  updateColor: React.Dispatch<React.SetStateAction<ColorInterface | undefined>>,
}

export interface GoodInterface {
  title: string,
  cover: string,
  price: number,
  colors?: ColorInterface[],
  favourite?: boolean,
  // herf: string,
  seller: BrandsInterface,
  material?:string,
  quantity?: number,
  selectedColor?: ColorInterface,
  dimensions?: DimensionsInterface,
  candle?: boolean,
  stock: number,
  madeToOrder: boolean,
}

export interface GoodsInterface {
  category: string,
  goods: GoodInterface[] | undefined,
  // setGoods: React.Dispatch<React.SetStateAction<GoodInterface[]>>
}

export interface BrandsInterface {
  name: string,
  description: string,
  href?: string,
  cover: string,
  goodsCollection?: GoodInterface[] | undefined,
}

export interface HeaderInterface {
  basket: GoodInterface[],
}

export interface AppInteface {
  basket: GoodInterface[],
  // setBasket: React.Dispatch<React.SetStateAction<GoodInterface[]>>,
}

export interface HomeInterface {
  basket: GoodInterface[],
}

export interface HomeContentInterface {
  setBasket: React.Dispatch<React.SetStateAction<GoodInterface[]>>,
}

export interface PopupInterface {
  children?: React.ReactNode,
  setClose: React.Dispatch<React.SetStateAction<boolean>>
}

export interface TermInterface {
  question: string,
  answer: string,
}

export interface CategoryInterface {
  title: string,
  links: {
    title: string,
    href: string,
  }[]
}