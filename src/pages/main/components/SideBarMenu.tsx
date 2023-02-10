import { useAppSelector } from "../../../store/hook/selector"
import { selectAllFlats } from "../../../store/sliceMainFlats"
import { Flat } from "../../../store/type"
import side from "./sideBarMenu.module.css"
import { Link } from "react-router-dom"

export default function SideBarMenu() {
  const citiesList = useAppSelector(
    (state) => state.flats.citiesListFooterHeader
  )
  const flats = useAppSelector(selectAllFlats) as Flat[]

  const objCities = citiesList.reduce((target: Record<string, number>, key) => {
    target[key] = flats.filter((element) => element.city === key).length
    return target
  }, {})

  return (
    <aside>
      <div className={side.categoryName}>Квартиры</div>
      {Object.entries(objCities).map(([key, value]) => {
        return (
          <div className={side.citiesAmount} key={Math.random()}>
            <Link
              to={`/flats?city=${key}&kind=tile&_page=1`}
              className={side.key}
            >
              {key}
            </Link>
            <span className={side.value}>{value}</span>
          </div>
        )
      })}
    </aside>
  )
}
