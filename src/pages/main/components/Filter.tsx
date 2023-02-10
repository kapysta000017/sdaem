import filter from "./filter.module.css"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import classnames from "classnames"
import LinkComponentGold from "../../../components/LinkGold"
import Option from "../../../components/Option"
import DropDown from "../../../components/DropDown"
import map from "../../../assets/images/main/map.svg"
import { useAppSelector } from "../../../store/hook/selector"
import ShowOption from "../../../components/ShowOptions"
import Price from "../../../components/Price"
import { useState, useEffect } from "react"
import {
  DefaultInputValues,
  InputValues,
  ControlCheckbox,
} from "../../../store/type"

export default function Filter() {
  const allCategory: Array<{ name: string; feature: string; id: number }> = [
    { name: "Квартиры на сутки", feature: "flats", id: 1 },
    { name: "Коттеджи и усадьбы", feature: "cottages", id: 2 },
    { name: "Бани и сауны", feature: "baths", id: 3 },
    { name: "Авто напрокат", feature: "cars", id: 4 },
  ]

  const optionElements = useAppSelector((state) => state.option.options)
  const citiesList = useAppSelector((state) => state.flats.citiesList)
  const roomsList = useAppSelector((state) => state.flats.roomsList)

  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParams = searchParams.get("category")

  const defalutParams = {
    city: "Выберите",
    rooms: "Выберите",
    priceFrom: "",
    priceTo: "",
    differentPrice: "",
    sleep: "Выберите",
    underground: "Выберите",
    district: "Выберите",
  }

  const [formInputValues, setFormInputValues] =
    useState<DefaultInputValues>(defalutParams)

  const formInputValuesMoreOptionFlats = formInputValues as InputValues

  const listParams = optionElements.map((element) => element.params)
  const objParamsAdd = listParams.reduce(
    (target: Record<string, boolean>, key) => {
      target[key] = false
      return target
    },
    {}
  )
  const [optionElementsControlCheckboxx, setOptionElementsControlCheckbox] =
    useState<Array<ControlCheckbox>>([])

  const optionElementsControlCheckbox = optionElements.map((element) => {
    return {
      ...element,
      check: objParamsAdd[element.params],
    }
  })

  useEffect(() => {
    setFormInputValues((state) => ({ ...state, ...objParamsAdd }))
    setOptionElementsControlCheckbox(optionElementsControlCheckbox)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionElements])

  useEffect(() => {
    setFormInputValues(() => defalutParams)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParams])

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
            style={{ paddingRight: "100px" }}
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
        <Link to="/map" className={filter.containerMap}>
          На карте
          <img src={map} alt="map" />
        </Link>
        {categoryParams === "flats" && (
          <LinkComponentGold
            to={`/flats?city=${
              formInputValues.city === "Выберите" ? "" : formInputValues.city
            }&rooms=${
              formInputValues.rooms === "Выберите" ? "" : formInputValues.rooms
            }&price=${formInputValues.differentPrice}&district=${
              formInputValues.district === "Выберите"
                ? ""
                : formInputValues.district
            }&underground=${
              formInputValues.underground === "Выберите"
                ? ""
                : formInputValues.underground
            }&sleep=${
              formInputValues.sleep === "Выберите" ? "" : formInputValues.sleep
            }&gascooker=${formInputValuesMoreOptionFlats.gascooker}&oven=${
              formInputValuesMoreOptionFlats.oven
            }&percolator=${
              formInputValuesMoreOptionFlats.percolator
            }&microwave=${formInputValuesMoreOptionFlats.microwave}&crockery=${
              formInputValuesMoreOptionFlats.crockery
            }&dishwasher=${
              formInputValuesMoreOptionFlats.dishwasher
            }&kind=tile&_page=1`}
          >
            Показать
          </LinkComponentGold>
        )}
        {categoryParams !== "flats" && (
          <LinkComponentGold to={`/cottage`}>Показать</LinkComponentGold>
        )}
      </div>
      <Option
        setFormInputValues={setFormInputValues}
        formInputValues={formInputValues}
        style={{ padding: "20px", borderRadius: "10px" }}
        optionElementsControlCheckbox={optionElementsControlCheckboxx}
        setOptionElementsControlCheckbox={setOptionElementsControlCheckbox}
      />
    </div>
  )
}
