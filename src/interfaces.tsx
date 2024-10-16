// import { UserInterface } from "./features/userSlice";

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
  cover: string,
  price: number,
  colors?: ColorInterface[],
  color: string,
  favourite?: boolean,
  // herf: string,
  seller: BrandsInterface,
  material?:string,
  // quantity?: number,
  selectedColor?: ColorInterface,
  dimensions: string,
  photos: {title: string, url: string}[],
  // candle?: boolean,
  // stock: number,
  // madeToOrder: boolean,
  _id: string,
  batch: number,
}

export interface goodPageInt {
  good: GoodInterface,
  quantity: number,
}

export interface TransactionInterface {
  parties : {_id: string, brandName: string, cover: string}[],
  goods: goodPageInt[],
  price: number,
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
  links: LinkInterface[],
  designers: LinkInterface[],
}

export interface AccountHistoryInterface {
  seller: boolean,
}

export interface GoodComponentInterface {
  good: GoodInterface,
}

export interface OptionInterface {
  value?: string, 
  id: string, 
  label: string
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
  // photos: {title: string, file: File, url: never}[] | {title: string, file: never, url: string}[],
  showApplication?: boolean,
}

export interface ApplicationNotUploadedIterface extends ApplicationInterface {
  photos: {title: string, file: File}[],
}

export interface ApplicationUploadedInterface extends ApplicationInterface {
  photos: {title: string, url: string}[];
}

export interface SelectInterface {
  label: string,
  options: OptionInterface[],
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