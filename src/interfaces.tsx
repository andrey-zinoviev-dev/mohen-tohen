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

export interface HistoryInterface {
  
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

export interface CollaborationInterface {
  name: {value: string, textarea: boolean, label: string},
  email: {value: string, textarea: boolean, label: string},
  phone: {value: string, textarea: boolean, label: string},
  sell?: string,
  subject?:{value: string, textarea: boolean, label: string},
}

export interface ApplicationInterface extends CollaborationInterface {
  city: {value: string, textarea: boolean, label: string},
  description: {value: string, textarea: boolean, label: string} | undefined,
  productionLength: {value: string, textarea: boolean, label: string},
  productionProcess: {value: string, textarea: boolean, label: string},
  stock: {value: string, textarea: boolean, label: string},
  size: {value: string, textarea: boolean, label: string},
  offerAgreement: {value: boolean, checkbox: boolean},
  personalDataAgreement: {value: boolean, checkbox: boolean},
  shippingPartnerAgreement: {value: boolean, checkbox: boolean},
  category: {value: string[], textarea: boolean, label: string},
  dateOfFill: {value: string, textarea: boolean, date: boolean},
  photos: {value: {name: string, type: string}[], photo: boolean},
  showApplication?: boolean,
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
  applicationData: ApplicationInterface,
  files: File[],
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