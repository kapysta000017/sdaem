import drop from "./dropDown.module.css"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { DefaultInputValues, InputValues } from "../store/type"

const DropDown: React.FC<{
  id: string
  citiesList?: Array<string>
  roomsList?: Array<string>
  districtList?: Array<string>
  sleepList?: Array<string>
  undergroundList?: Array<string>
  style?: React.CSSProperties
  formInputValues: DefaultInputValues | InputValues
  setFormInputValues: React.Dispatch<
    React.SetStateAction<DefaultInputValues | InputValues>
  >
}> = ({
  id,
  citiesList,
  roomsList,
  districtList,
  sleepList,
  undergroundList,
  style,
  formInputValues,
  setFormInputValues,
}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParams = searchParams.get("category")

  useEffect(() => {
    const dropdownElements = document.getElementById(id)
    dropdownElements?.classList.remove(drop.show)
  }, [categoryParams])

  const onClickShowDownContent = (event: Event) => {
    const target = event.target as typeof event.target
    const element = target as HTMLElement
    if (!element.matches(`.${drop.dropbtn}`)) {
      const dropdownElements = document.getElementById(id)
      dropdownElements?.classList.remove(drop.show)
    }
  }

  useEffect(() => {
    window.addEventListener("click", onClickShowDownContent)
    return () => window.removeEventListener("click", onClickShowDownContent)
  }, [])

  return (
    <div style={{ position: "relative", marginTop: "11px", zIndex: "5" }}>
      <button
        className={drop.dropbtn}
        onClick={() => document.getElementById(id)!.classList.toggle(drop.show)}
        style={style}
      >
        {typeof citiesList === "object" && formInputValues.city}
        {typeof roomsList === "object" && formInputValues.rooms}
        {typeof districtList === "object" && formInputValues.district}
        {typeof undergroundList === "object" && formInputValues.underground}
        {typeof sleepList === "object" && formInputValues.sleep}
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
        {typeof districtList === "object" &&
          districtList.map((element) => {
            return (
              <div
                key={Math.random()}
                className={drop.downElement}
                onClick={() =>
                  setFormInputValues((state) => ({
                    ...state,
                    district: element,
                  }))
                }
              >
                {element}
              </div>
            )
          })}
        {typeof sleepList === "object" &&
          sleepList.map((element) => {
            return (
              <div
                key={Math.random()}
                className={drop.downElement}
                onClick={() =>
                  setFormInputValues((state) => ({
                    ...state,
                    sleep: element,
                  }))
                }
              >
                {element}
              </div>
            )
          })}
        {typeof undergroundList === "object" &&
          undergroundList.map((element) => {
            return (
              <div
                key={Math.random()}
                className={drop.downElement}
                onClick={() =>
                  setFormInputValues((state) => ({
                    ...state,
                    underground: element,
                  }))
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
