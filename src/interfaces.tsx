export interface ColorInterface  {
  title: string, 
  colorCode: string
}

export interface ColorsInterface {
  colors: ColorInterface[],
}

export interface GoodInterface {
  title: string,
  cover: string,
  price: number,
  colors?: ColorInterface[],
  favourite?: boolean,
  // herf: string,
  seller: {
    // href: string,
    name: string,
  },
  material?:string,
  width?: number[],
  quantity?: number,
  selectedColor?: ColorInterface,
}

export interface GoodsInterface {
  category: string,
  goods: GoodInterface[],
  // setGoods: React.Dispatch<React.SetStateAction<GoodInterface[]>>
}

export interface BrandsInterface {
  name: string,
  href?: string,
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
  children: React.ReactNode,
  setClose: React.Dispatch<React.SetStateAction<boolean>>
}