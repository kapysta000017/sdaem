import card from "./Card.module.css"
import { ReactNode } from "react"

export default function Card({
  img,
  titleText,
  text,
  children,
}: {
  img: string
  titleText: string
  text: ReactNode
  children: ReactNode
}) {
  return (
    <div className={card.inner}>
      <div className={card.headline}>
        <img src={img} alt="customers" />
        <div>{titleText}</div>
      </div>
      <div className={card.text}>{text}</div>
      {children}
    </div>
  )
}
