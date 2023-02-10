import { ReactElement } from "react"
import input from "./input.module.css"
import { Inputs } from "../typeInputForm/type"
import { UseFormRegister, FieldErrors } from "react-hook-form"
import { Keys } from "../typeInputForm/type"
import exclamationRed from "./../assets/images/contact/form/error/exclamationRed.svg"
import classnames from "classnames"

export default function Input({
  type,
  name,
  placeholder,
  child,
  style,
  register,
  error,
}: {
  type: string
  name: Keys
  placeholder: string
  child: (classname: string) => ReactElement
  style: React.CSSProperties
  register: UseFormRegister<Inputs>
  error?: FieldErrors<Inputs>
}) {
  let pattern: RegExp = /^/
  switch (name) {
    case "login":
      pattern = /^\S*$/
      break
    case "email":
      pattern = /^\S+@\S+$/
      break
    case "password":
      pattern = /^\S*$/
      break
    case "repeatpassword":
      pattern = /^\S+$/
      break
  }
  return (
    <label className={input.label}>
      {child(input.icon)}
      <input
        className={classnames(error ? input.inputError : input.input)}
        type={type}
        placeholder={placeholder}
        style={style}
        {...register(name, { required: true, pattern: pattern })}
      />
      {error && <img src={exclamationRed} className={input.iconError} />}
    </label>
  )
}
