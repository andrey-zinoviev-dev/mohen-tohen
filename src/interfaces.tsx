// import { UserInterface } from "./features/userSlice";

import { UserInterface } from "./features/userSlice";

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

// export interface DimensionTranslateInterface {
//   title: string,
//   translation: string,
//   unit: string,
// }

export interface ColorsInterface {
  colors: ColorInterface[],
  updateColor: React.Dispatch<React.SetStateAction<ColorInterface | undefined>>,
}

export interface GoodInterface {
  title: string,
  description: string,
  category: string,
  cover: string,
  price: number,
  colors: OptionInterface[],
  // color: string,
  // favourite?: boolean,
  // herf: string,
  seller: UserInterface,
  materials: OptionInterface[],
  // quantity?: number,
  // selectedColor?: ColorInterface,
  dimensions: OptionInterface[],
  photos: string[],
  // candle?: boolean,
  // stock: number,
  madeToOrder: boolean,
  _id: string,
  batch: number,
  paid?: boolean,
  // goodOptions?: {title: string, price: number, type: string}[]
  createdAt: number,
}

//Pick
export type GoodWithoutOptionsType = Pick<GoodInterface, "title" | "_id" | "seller" | "price" | "photos" | "batch"> 

export interface BasketGoodInterface {
  good: GoodWithoutOptionsType,
  selectedColor: OptionInterface,
  selectedMaterial: OptionInterface,
  selectedDimension: OptionInterface,
  quantity: number,
}

// export interface goodPageInt {
//   good: BasketGoodInterface,
//   quantity: number,
//   // price: number
// }

export interface TransactionGoodInterface {
  good: {
    _id: string,
    title: string,
  },
  // seller: string | null,
  color: OptionInterface,
  dimension: OptionInterface,
  material: OptionInterface,
  quantity: number,
  price: number,
}

export interface TransactionInterface {
  // parties : {_id: string, brandName: string, cover: string}[],
  goods: TransactionGoodInterface[],
  buyer: UserInterface,
  createdAt: Date,
  total: number,
  _id: string,
}

export interface GoodsInterface {
  // category: string,
  goods: GoodInterface[] | undefined,
  inAccountPage?: boolean,
  // setGoods: React.Dispatch<React.SetStateAction<GoodInterface[]>>
}

export interface BrandsInterface {
  name: string,
  description: string,
  // href: string,
  cover: string,
  goodsCollection?: GoodInterface[] | undefined,
  _id: string,
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

export interface LinkInterface {
  title: string,
  href: string,
}

export interface LinksInterface {
  links: LinkInterface[],
  title?: string,
  inAccount?: boolean,
}

export interface CategoryInterface {
  title: string,
  cover: string,
  subcategories: string[],
}

export interface AccountHistoryInterface {
  seller: boolean,
}

export interface GoodComponentInterface {
  good: GoodInterface,
}

export interface OptionInterface {
  option: string,
  price: number,
}

// export interface CollaborationInterface {
//   name: {value: string, textarea: boolean, label: string},
//   email: {value: string, textarea: boolean, label: string},
//   phone: {value: string, textarea: boolean, label: string},
//   sell?: string,
//   subject?:{value: string, textarea: boolean, label: string},
// }

export interface CollaborationInterface {
  name: string,
  email: string,
  phone: string,
  sell?: string,
  subject?:string,
}

// export interface ApplicationInterface extends CollaborationInterface {
//   approved: {value: {approved?: boolean, declined?: boolean}, approved: boolean},
//   city: {value: string, textarea: boolean, label: string},
//   description: {value: string, textarea: boolean, label: string} | undefined,
//   productionLength: {value: string, textarea: boolean, label: string},
//   productionProcess: {value: string, textarea: boolean, label: string},
//   stock: {value: string, textarea: boolean, label: string},
//   size: {value: string, textarea: boolean, label: string},
//   offerAgreement: {value: boolean, checkbox: boolean},
//   personalDataAgreement: {value: boolean, checkbox: boolean},
//   shippingPartnerAgreement: {value: boolean, checkbox: boolean},
//   category: {value: string[], textarea: boolean, label: string},
//   dateOfFill: {value: string, textarea: boolean, date: boolean},
//   photos: {value: {name: string, type: string}[], photo: boolean},
//   showApplication?: boolean,
// }

export interface ApplicationInterface extends CollaborationInterface {
  approved: string,
  city: string,
  brandName: string,
  description: string | undefined,
  productionLength: string,
  productionProcess: string,
  stock: string,
  size: string,
  offerAgreement: boolean,
  personalDataAgreement: boolean,
  shippingPartnerAgreement: boolean,
  category: string[],
  dateOfFill: string,
  minPrice: string,
  maxPrice: string,
  // photos: {title: string, file: File, url: never}[] | {title: string, file: never, url: string}[],
  showApplication?: boolean,
  _id?:string,
}

export interface ApplicationNotUploadedIterface extends ApplicationInterface {
  photos: string[],
}

export interface ApplicationUploadedInterface extends ApplicationInterface {
  photos: string[];
}

export interface SelectInterface {
  label: string,
  options: OptionInterface[],
  selectedOption: string,
  updateApplication: (arg:string) => void,
  // updateApplication: React.Dispatch<React.SetStateAction<ApplicationInterface>>
}

export interface CheckboxInterface {
  label: string,
  checked: boolean | undefined,
  updateState: () => void;
}

export interface OverviewInterface {
  applicationData: ApplicationNotUploadedIterface,
  // files: File[],
  // updateFiles: React.Dispatch<React.SetStateAction<File[]>>,
  // updateApplicationData: React.Dispatch<React.SetStateAction<ApplicationInterface>>,
}

export interface FileInterface {
  file?: File,
  showPhotos: boolean | undefined,
  addPhoto?: React.Dispatch<React.SetStateAction<ApplicationInterface>>,
  removePhoto?: React.Dispatch<React.SetStateAction<ApplicationInterface>>,
  selectPhoto?: React.Dispatch<React.SetStateAction<File | null>>,
  addFile?: React.Dispatch<React.SetStateAction<File[]>>,
  removeFile?: React.Dispatch<React.SetStateAction<File[]>>,
}

export interface urlConvertedInterface {
  subcategories?: string[],
  stock?: boolean,
  minPrice?: number,
  maxPrice?: number,
  minWidth?: number,
  maxWidth?: number,
  minHeight?: number,
  maxHeight?: number,
  minDepth?: number,
  maxDepth?: number,
  colors?: string[]
}

export interface AccountGoodInterface {
  title: string, 
  category: string, 
  description: string, 
  materials: OptionInterface[], 
  dimensions: OptionInterface[], 
  photos: string[], 
  colors: OptionInterface[]
  price: number, 
  batch: number, 
  // color?: string, 
  madeToOrder: boolean,
  // goodOptions?: {title: string, price: number, type: string}[],
  _id?: string
}

export interface FileUrlInterface {
  url: string,
  file: File,
}

export interface OptionInterface {
  option: string,
  price: number,
}