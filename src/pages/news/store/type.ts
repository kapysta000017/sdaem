export type New = {
  title: string
  text: string
  data: string
  id: string
  image: string
}
export interface IBread {
  name: string
  link: string
}
export type StoreBread = {
  bread: Array<IBread>
  status: string
  error: string | null
}
