export interface GoodInterface {
  title: string,
  cover: string,
  price: number,
  colors?: string[],
  favourite?: boolean,
  // herf: string,
  seller: {
    // href: string,
    name: string,
  }
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