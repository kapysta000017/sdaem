import tile from "./tileKind.module.css"
import { Flat } from "../../../../../store/type"
import { useSearchParams } from "react-router-dom"
import Card from "./Card"

export default function TileKind({ flats }: { flats: Flat[] }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageNumber = searchParams.get("_page")
  const amountCards = 6 * Number(pageNumber)

  return (
    <div className={tile.inner}>
      {amountCards - 6 > flats.length && (
        <div>Квартиры закончились, вернитесь на шаг назад</div>
      )}
      {flats.slice(amountCards - 6, amountCards).map((element) => {
        return <Card element={element} key={Math.random()} />
      })}
    </div>
  )
}
