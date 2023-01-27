import filter from "./filter.module.css"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import classnames from "classnames"
import LinkComponentGold from "../../../components/LinkGold"
import Option from "../../../components/Option"
import DropDown from "../../../components/DropDown"
import map from "../../../assets/images/main/map.svg"
import { useAppSelector } from "../../../store/hook/selector"
import { useEffect } from "react"
import ShowOption from "../../../components/ShowOptions"
import Price from "../../../components/Price"
import { DefaultInputValues, InputValues } from "./../store/type"

export default function Filter({
  flagDisabledLink,
  formInputValues,
  setFormInputValues,
  formInputValuesMoreOptionFlats,
}: {
  flagDisabledLink: boolean
  formInputValues: DefaultInputValues | InputValues
  setFormInputValues: React.Dispatch<
    React.SetStateAction<DefaultInputValues | InputValues>
  >
  formInputValuesMoreOptionFlats: Record<string, string | boolean | number>
}) {
  const allCategory: Array<{ name: string; feature: string; id: number }> = [
    { name: "Квартиры на сутки", feature: "flats", id: 1 },
    { name: "Коттеджи и усадьбы", feature: "cottages", id: 2 },
    { name: "Бани и сауны", feature: "baths", id: 3 },
    { name: "Авто напрокат", feature: "cars", id: 4 },
  ]

  const citiesList = useAppSelector((state) => state.hotels.citiesList)
  const roomsList = useAppSelector((state) => state.hotels.roomsList)

  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParams = searchParams.get("category")
  const optionParams = searchParams.get("option")

  useEffect(() => {
    setSearchParams({ category: "flats", option: "false" })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={filter.inner}>
      <h1 className={filter.title}>
        Sdaem.by - у нас живут{" "}
        <span className={filter.titleOther}>ваши объявления</span>
      </h1>
      <div className={filter.categorys}>
        {allCategory.map((element) => {
          return (
            <Link
              key={element.id}
              to={`/main?category=${element.feature}`}
              className={classnames(
                filter.category,
                categoryParams === element.feature && filter.categoryActive
              )}
            >
              {element.name}
            </Link>
          )
        })}
      </div>
      <div className={filter.search}>
        <div className={filter.containerDropCities}>
          <div className={filter.titleDrop}>Город</div>
          <DropDown
            citiesList={citiesList}
            id={"city"}
            formInputValues={formInputValues}
            setFormInputValues={setFormInputValues}
          />
        </div>
        <div className={filter.containerDropFlats}>
          <div className={filter.titleDrop}>Комнаты</div>
          <DropDown
            roomsList={roomsList}
            id={"rooms"}
            style={{ paddingRight: "120px" }}
            formInputValues={formInputValues}
            setFormInputValues={setFormInputValues}
          />
        </div>
        <div className={filter.containerPrice}>
          <div className={filter.titlePrice}>Цена за сутки (BYN)</div>
          <Price
            setFormInputValues={setFormInputValues}
            formInputValues={formInputValues}
          />
        </div>
        <ShowOption />
        <div className={filter.containerMap}>
          На карте
          <img src={map} alt="map" />
        </div>
        {categoryParams === "flats" && (
          <LinkComponentGold
            to={`/hotels?city=${formInputValues.city}&rooms=${formInputValues.rooms}&price=${formInputValues.differentPrice}&gascooker=${formInputValuesMoreOptionFlats.gascooker}&oven=${formInputValuesMoreOptionFlats.oven}&percolator=${formInputValuesMoreOptionFlats.percolator}&microwave=${formInputValuesMoreOptionFlats.microwave}&crockery=${formInputValuesMoreOptionFlats.crockery}&dishwasher=${formInputValuesMoreOptionFlats.dishwasher}`}
            flagDisabledLink={flagDisabledLink}
          >
            Показать
          </LinkComponentGold>
        )}
        {categoryParams !== "flats" && (
          <LinkComponentGold
            to={`/cottage`}
            flagDisabledLink={flagDisabledLink}
          >
            Показать
          </LinkComponentGold>
        )}
      </div>
      {optionParams === "true" && (
        <Option
          formInputValuesMoreOptionFlats={formInputValuesMoreOptionFlats}
          setFormInputValues={setFormInputValues}
          style={{ borderRadius: "10px 10px 10px 10px" }}
        />
      )}
    </div>
  )
}
