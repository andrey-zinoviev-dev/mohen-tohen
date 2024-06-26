export interface GoodInterface {
  title: string,
  cover: string,
  price: number,
  colors?: string[],
  // herf: string,
  seller: {
    // href: string,
    name: string,
  }
}

export interface GoodsInterface {
  category: string,
  goods: GoodInterface[]
}