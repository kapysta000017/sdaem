import { ReactElement } from "react"
import input from "./input.module.css"

export default function Input({
  type,
  name,
  placeholder,
  child,
  style,
}: {
  type: string
  name: string
  placeholder: string
  child: (classname: string) => ReactElement
  style: React.CSSProperties
}) {
  return (
    <label className={input.label}>
      {child(input.icon)}
      <input
        className={input.input}
        type={type}
        name={name}
        placeholder={placeholder}
        style={style}
        required
      />
    </label>
  )
}
