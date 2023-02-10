import { ReactNode } from "react"
import button from "./button.module.css"

export default function Button({
  setIsPopup,
  children,
  style,
  goBack,
}: {
  setIsPopup?: React.Dispatch<React.SetStateAction<boolean>>
  children: ReactNode
  style: React.CSSProperties
  goBack?: () => void
}) {
  return (
    <button
      onClick={() => {
        typeof setIsPopup === "function" && setIsPopup(false)
        typeof goBack === "function" && goBack()
      }}
      className={button.inner}
      style={style}
    >
      {children}
    </button>
  )
}
