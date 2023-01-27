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
type ContactHotel = {
  name: string
  phone: string
  email: string
  avatar: string
}
export type Hotel = {
  price: string
  city: string
  rooms: string
  street: string
  are: number
  contact: Array<ContactHotel>
  district: string
  id: string
  like: boolean
  sleep: string
  text: string
  underground: string
  gascooker: boolean
  oven: boolean
  percolator: boolean
  microwave: boolean
  crockery: boolean
  dishwasher: boolean
}
export type DefaultInputValues = {
  city: string
  rooms: string
  priceFrom: string
  priceTo: string
  differentPrice: string | number
}
export type InputValues = {
  gascooker: boolean
  oven: boolean
  percolator: boolean
  microwave: boolean
  crockery: boolean
  dishwasher: boolean
} & DefaultInputValues
