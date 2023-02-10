export type Inputs = {
  login: string
  email?: string
  password: string
  repeatpassword?: string
  message?: string
  customError?: string
}
export type Keys = keyof Inputs
