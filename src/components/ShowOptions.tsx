import { useLocation } from "react-router-dom"
import iconOption from "./../assets/images/main/option.svg"
import option from "./showOption.module.css"

export default function ShowOption() {
  const location = useLocation()

  const addMoreOption = () => {
    location.pathname === "/flats" &&
      document
        .getElementById("searchFlat")!
        .classList.toggle(option.searchFlatShadow)

    location.pathname === "/main" &&
      document
        .querySelector(`.${option.inner}`)!
        .classList.toggle(option.innerChoose)
    location.pathname === "/flats" &&
      document
        .querySelector(`.${option.inner}`)!
        .classList.toggle(option.innerChooseBelow)

    document.getElementById("option")?.classList.toggle(option.optionToggle)
  }

  return (
    <div className={option.inner} onClick={addMoreOption}>
      Больше опций
      <img src={iconOption} alt="option" />
    </div>
  )
}
