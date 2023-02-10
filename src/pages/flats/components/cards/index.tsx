import { useSearchParams } from "react-router-dom"
import { useAppSelector } from "../../../../store/hook/selector"
import { selectAllFlats } from "../../../../store/sliceMainFlats"
import { Flat } from "../../../../store/type"
import ListKind from "./ListKInd/ListKind"
import TileKind from "./TileKind/TileKind"
import cards from "./index.module.css"

export default function CardsFlats() {
  const [searchParams, setSearchParams] = useSearchParams()
  const priceFromTo = searchParams.get("priceFromTo")

  const flats = useAppSelector(selectAllFlats) as Flat[]
  const { error, status } = useAppSelector((state) => state.flats)

  const priceIs = (element: Flat) => {
    if (!searchParams.get("price")) {
      return true
    } else {
      return Number(element.price) <= Number(searchParams.get("price"))
    }
  }

  let flatsFilter = flats.filter(
    (element) =>
      element.city.includes(searchParams.get("city") as string) &&
      element.rooms.includes((searchParams.get("rooms") as string) || "") &&
      priceIs(element) &&
      element.district.includes(
        (searchParams.get("district") as string) || ""
      ) &&
      element.underground.includes(
        (searchParams.get("underground") as string) || ""
      ) &&
      Number(element.sleep) >= Number(searchParams.get("sleep"))
  )
  const amountFlats = flatsFilter.length

  if (priceFromTo === "Дорогие") {
    flatsFilter.sort((first, second) =>
      Number(first.price) > Number(second.price) ? -1 : 1
    )
  }
  if (priceFromTo === "Дешевые") {
    flatsFilter.sort((first, second) =>
      Number(first.price) > Number(second.price) ? 1 : -1
    )
  }

  if (error) {
    return <div>ошибка</div>
  }
  if (status) {
    return <div>loading...</div>
  }

  return (
    <div>
      <h3 className={cards.title}>Найдено {amountFlats} квартир</h3>
      {searchParams.get("kind") === "tile" && <TileKind flats={flatsFilter} />}
      {searchParams.get("kind") === "list" && <ListKind flats={flatsFilter} />}
    </div>
  )
}
