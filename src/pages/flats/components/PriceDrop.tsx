import drop from "./priceDrop.module.css"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"

export default function PriceDrop() {
  const pricesSort: Array<string> = ["Дешевые", "Дорогие"]
  const [valueButton, setValueButton] = useState<string>("По умолчанию")
  const [searchParams, setSearchParams] = useSearchParams()
  const priceFromToParams = (searchParams.get("priceFromTo") as string) || ""

  useEffect(() => {
    priceFromToParams && setValueButton(() => priceFromToParams)
    !priceFromToParams && setValueButton(() => "По умолчанию")
  }, [priceFromToParams])

  const onClickShowDownContent = (event: Event) => {
    const target = event.target as typeof event.target
    const element = target as HTMLElement
    if (!element.matches(`.${drop.dropbtn}`)) {
      const dropdownElements = document.getElementById("priceFromTo")
      dropdownElements?.classList.remove(drop.show)
    }
  }

  useEffect(() => {
    window.addEventListener("click", onClickShowDownContent)
    return () => window.removeEventListener("click", onClickShowDownContent)
  }, [])

  return (
    <div style={{ position: "relative" }}>
      <button
        className={drop.dropbtn}
        onClick={() =>
          document.getElementById("priceFromTo")!.classList.toggle(drop.show)
        }
      >
        {valueButton}
      </button>
      <div id="priceFromTo" className={drop.downContent}>
        {pricesSort.map((element) => {
          return (
            <div
              key={Math.random()}
              className={drop.downElement}
              onClick={() => {
                searchParams.set("priceFromTo", element)
                setSearchParams(searchParams)
                setValueButton(() => element)
              }}
            >
              {element}
            </div>
          )
        })}
      </div>
    </div>
  )
}
