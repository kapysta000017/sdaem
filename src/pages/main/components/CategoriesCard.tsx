import categories from "./categoriesCard.module.css"
import flats from "./../../../assets/images/main/category/flats.png"
import cottage from "./../../../assets/images/main/category/cottage.png"
import bath from "./../../../assets/images/main/category/bath.png"
import car from "./../../../assets/images/main/category/car.png"
import { Link, useSearchParams } from "react-router-dom"
import arrow from "./../../../assets/images/main/category/arrow.svg"
import { useAppSelector } from "../../../store/hook/selector"

export default function CategoriesCard() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParams = searchParams.get("category")
  const citiesList = useAppSelector(
    (state) => state.flats.citiesListFooterHeader
  )

  return (
    <section className={categories.inner}>
      <div className={categories.card}>
        <img className={categories.cardImg} src={flats} alt="flats" />
        <div className={categories.info}>
          <span className={categories.label}>снять квартиру</span>
          <span className={categories.name}>Квартиры на сутки</span>
          <ul className={categories.citiesList}>
            {citiesList.map((element) => (
              <li key={Math.random()}>
                <Link
                  className={categories.city}
                  to={`/flats?city=${element}&kind=tile&_page=1`}
                >
                  {element}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {categoryParams !== "flats" && (
          <Link
            to="/flats?city=&kind=tile&_page=1"
            className={categories.blockArrow}
          >
            <img src={arrow} alt="arrow" />
          </Link>
        )}
      </div>
      <div className={categories.card}>
        <img className={categories.cardImg} src={cottage} alt="cottage" />
        <div className={categories.info}>
          <span className={categories.label}>СНЯТЬ коттедж НА ПРАЗДНИК</span>
          <span className={categories.name}>Коттеджи и усадьбы</span>
        </div>
        {categoryParams !== "cottages" && (
          <Link to="/cottages" className={categories.blockArrow}>
            <img src={arrow} alt="arrow" />
          </Link>
        )}
      </div>
      <div className={categories.card}>
        <img className={categories.cardImg} src={bath} alt="bath" />
        <div className={categories.info}>
          <span className={categories.label}>ПОПАРИТЬСЯ В БанЕ С ДРУЗЬЯМИ</span>
          <span className={categories.name}>Бани и сауны</span>
        </div>
        {categoryParams !== "baths" && (
          <Link to="/bath" className={categories.blockArrow}>
            <img src={arrow} alt="arrow" />
          </Link>
        )}
      </div>
      <div className={categories.card}>
        <img className={categories.cardImg} src={car} alt="car" />
        <div className={categories.info}>
          <span className={categories.label}>еСЛИ СРОЧНО НУЖНА МАШИНА</span>
          <span className={categories.name}>Авто на прокат</span>
        </div>
        {categoryParams !== "cars" && (
          <Link to="/car" className={categories.blockArrow}>
            <img src={arrow} alt="arrow" />
          </Link>
        )}
      </div>
    </section>
  )
}
