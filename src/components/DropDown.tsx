import drop from "./dropDown.module.css"
import { useEffect, useRef } from "react"
import { useSearchParams } from "react-router-dom"
import { DefaultInputValues, InputValues } from "../pages/main/store/type"

const DropDown: React.FC<{
  id: string
  citiesList?: Array<string>
  roomsList?: Array<string>
  style?: React.CSSProperties
  formInputValues: DefaultInputValues | InputValues
  setFormInputValues: React.Dispatch<
    React.SetStateAction<DefaultInputValues | InputValues>
  >
}> = ({
  id,
  citiesList,
  roomsList,
  style,
  formInputValues,
  setFormInputValues,
}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParams = searchParams.get("category")

  const boofArray = useRef<Array<string>>([])
  useEffect(() => {
    const dropdownElements = document.getElementById(id)
    dropdownElements?.classList.remove(drop.show)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParams])

  const onClickShowDownContent = (event: Event) => {
    const target = event.target as typeof event.target
    const element = target as HTMLElement
    const parentElement = element.parentElement
    const dropDown = parentElement?.childNodes[1] as HTMLElement
    const idDrop = dropDown?.id
    if (idDrop) {
      boofArray.current.push(idDrop)
    }
    if (!element.matches(`.${drop.dropbtn}`)) {
      const id = boofArray.current.pop() as string
      const dropdownElements = document.getElementById(id)
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
        onClick={() => document.getElementById(id)!.classList.toggle(drop.show)}
        style={style}
      >
        {typeof citiesList === "object" && formInputValues.city}
        {typeof roomsList === "object" && formInputValues.rooms}
      </button>
      <div id={id} className={drop.downContent}>
        {typeof citiesList === "object" &&
          citiesList.map((element) => {
            return (
              <div
                key={Math.random()}
                className={drop.downElement}
                onClick={() =>
                  setFormInputValues((state) => ({ ...state, city: element }))
                }
              >
                {element}
              </div>
            )
          })}
        {typeof roomsList === "object" &&
          roomsList.map((element) => {
            return (
              <div
                key={Math.random()}
                className={drop.downElement}
                onClick={() =>
                  setFormInputValues((state) => ({ ...state, rooms: element }))
                }
              >
                {element}
              </div>
            )
          })}
      </div>
    </div>
  )
}
export default DropDown
