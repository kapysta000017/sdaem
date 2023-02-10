import logo from "./../../../assets/images/header/logo.png"
import header from "./header.module.css"
import { Link, NavLink } from "react-router-dom"
import classnames from "classnames"
import { useSearchParams } from "react-router-dom"
import { useAppSelector } from "../../../store/hook/selector"
import { useEffect } from "react"
import AddAd from "../../../components/AddAd"

export default function Header() {
  const citiesList = useAppSelector(
    (state) => state.flats.citiesListFooterHeader
  )

  const [searchParams, setSearchParams] = useSearchParams()
  const city = searchParams.get("city")

  const onClickShowDownContent = (event: Event) => {
    const target = event.target as typeof event.target
    const element = target as HTMLElement
    if (!element.matches(`.${header.itemDrop}`)) {
      const dropdownElements = document.getElementById("citiesListHeader")
      dropdownElements?.classList.remove(header.showLinksDrop)
    }
  }

  useEffect(() => {
    window.addEventListener("click", onClickShowDownContent)
    return () => window.removeEventListener("click", onClickShowDownContent)
  }, [])

  return (
    <header>
      <nav className={header.inner}>
        <Link to="/main?category=flats">
          <img src={logo} className={header.logo} alt="logo" />
        </Link>
        <div style={{ position: "relative" }}>
          <div
            className={classnames(
              header.item,
              header.itemMap,
              header.itemDrop,
              city && header.itemActive
            )}
            onClick={() =>
              document
                .getElementById("citiesListHeader")!
                .classList.toggle(header.showLinksDrop)
            }
          >
            Квартиры {city ? `${city}` : "на сутки"}
          </div>
          <div id="citiesListHeader" className={header.downContent}>
            {citiesList.map((element) => {
              return (
                <Link
                  to={`/flats?city=${element}&kind=tile&_page=1`}
                  key={Math.random()}
                  className={header.downElement}
                >
                  {element}
                </Link>
              )
            })}
          </div>
        </div>
        <NavLink
          to="/cottages"
          className={({ isActive }) => {
            return isActive
              ? classnames(header.item, header.itemActive)
              : header.item
          }}
        >
          Коттеджи и усадьбы
        </NavLink>
        <NavLink
          to="/bath"
          className={({ isActive }) => {
            return isActive
              ? classnames(header.item, header.itemActive)
              : header.item
          }}
        >
          Бани и Сауны
        </NavLink>
        <NavLink
          to="/car"
          className={({ isActive }) => {
            return isActive
              ? classnames(header.item, header.itemActive)
              : header.item
          }}
        >
          Авто напрокат
        </NavLink>
        <AddAd to="/add" className={header.add} value="Разместить объявление" />
      </nav>
    </header>
  )
}
