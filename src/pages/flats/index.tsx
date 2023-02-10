import Bread from "../../components/Bread"
import flat from "./index.module.css"
import { useSearchParams } from "react-router-dom"
import ListRooms from "./components/ListRoomss"
import { useEffect } from "react"
import { fetchAllFlats } from "../../store/sliceMainFlats"
import { useAppDispatch } from "../../store/hook/dispatch"
import Filter from "./components/Filters"
import { fetchOneOption } from "../../components/stores/sliceOption"
import PriceDrop from "./components/PriceDrop"
import ToggleKindCards from "./components/ToggleKindCards"
import ToggleOnMap from "./components/ToggleOnMap"
import CardsFlats from "./components/cards"
import Pagination from "../../components/Pagination"
import SocialIconComponent from "./components/SocialIconComponent"
import { ReactComponent as Vk } from "./../../assets/images/flats/vk.svg"
import { ReactComponent as Viber } from "./../../assets/images/flats/viber.svg"
import { ReactComponent as Whatsapp } from "./../../assets/images/flats/whatsapp.svg"
import { ReactComponent as Telegram } from "./../../assets/images/flats/telegram.svg"
import { ReactComponent as Facebook } from "./../../assets/images/flats/facebook.svg"

export default function Flats() {
  const dispatch = useAppDispatch()

  const [searchParams, setSearchParams] = useSearchParams()
  const city = searchParams.get("city") as string

  useEffect(() => {
    dispatch(fetchAllFlats())
    dispatch(fetchOneOption("flats"))
  }, [dispatch])

  return (
    <div>
      <div className={flat.inner}>
        <div className={flat.titleContainer}>
          <Bread cityName={city} />
          <h1 className={flat.titleText}>Аренда квартир на сутки {city}</h1>
          <span className={flat.titleInfo}>Рекомендуем посмотреть</span>
          <ListRooms />
        </div>
      </div>
      <Filter />
      <div className={flat.containerKindCardsContainer}>
        <PriceDrop />
        <div className={flat.kindCardsContainer}>
          <ToggleKindCards kind={"tile"}>Плитки</ToggleKindCards>
          <ToggleKindCards kind={"list"}>Список</ToggleKindCards>
          <div style={{ marginLeft: "44px" }}>
            <ToggleOnMap fill={"#664EF9"} />
          </div>
        </div>
      </div>
      <div className={flat.cardsContainer}>
        <CardsFlats />
        <div className={flat.actionsUser}>
          <Pagination />
          <div className={flat.socialContainer}>
            <span style={{ marginRight: "6px" }}>Поделиться</span>
            <SocialIconComponent Img={Vk} href="https://vk.com" />
            <SocialIconComponent Img={Viber} href="https://vk.com" />
            <SocialIconComponent Img={Whatsapp} href="https://vk.com" />
            <SocialIconComponent Img={Telegram} href="https://vk.com" />
            <SocialIconComponent Img={Facebook} href="https://vk.com" />
          </div>
        </div>
      </div>
      <div className={flat.footer}>
        <h3 className={flat.footerTitle}>
          Показать найденные квартиры на карте
        </h3>
        <div className={flat.description}>
          Ищите новостройки рядом с работой, парком или родственниками
        </div>
        <ToggleOnMap fill="rgba(255, 213, 79, 1)" classname={flat.mapHover} />
      </div>
    </div>
  )
}
