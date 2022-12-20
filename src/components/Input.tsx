import { ReactElement } from "react"
import input from "./input.module.css"

export default function Input({
  type,
  name,
  placeholder,
  child,
}: {
  type: string
  name: string
  placeholder: string
  child: (classname: string) => ReactElement
}) {
  return (
    <label className={input.label}>
      {child(input.icon)}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={input.input}
        required
      />
    </label>
  )
}
