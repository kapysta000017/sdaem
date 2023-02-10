export type Option = {
  name: string
  params: string
  id: string
}
export type StoreOption = {
  options: Array<Option>
  status: string
  error: null | string
}

export type ContactFlat = {
  name: string
  phone: string
  email: string
  avatar: string
}
export type Flat = {
  price: string
  city: string
  rooms: string
  street: string
  area: number
  contactUser: ContactFlat
  district: string
  id: string
  like: boolean
  sleep: string
  text: string
  img: Array<string>
  underground: string
  gascooker: boolean
  oven: boolean
  percolator: boolean
  microwave: boolean
  crockery: boolean
  dishwasher: boolean
}

export type DefaultInputValues = {
  city?: string
  rooms?: string
  priceFrom?: string
  priceTo?: string
  differentPrice?: string | number
  sleep?: string
  underground: string
  district: string
}
export type InputValues = {
  gascooker?: boolean
  oven?: boolean
  percolator?: boolean
  microwave?: boolean
  crockery?: boolean
  dishwasher?: boolean
} & DefaultInputValues

export type ControlCheckbox = {
  check: boolean
  name: string
  params: string
  id: string
}
