import filter from "./filter.module.css"
import DropDown from "../../../components/DropDown"
import { useState, useEffect } from "react"
import {
  DefaultInputValues,
  InputValues,
  ControlCheckbox,
} from "../../../store/type"
import { useAppSelector } from "../../../store/hook/selector"
import Price from "../../../components/Price"
import ShowOption from "../../../components/ShowOptions"
import LinkPurple from "../../../components/LinkPurple"
import Option from "../../../components/Option"

export default function Filter() {
  const optionElements = useAppSelector((state) => state.option.options)
  const citiesList = useAppSelector((state) => state.flats.citiesList)

  const defalutParams = {
    city: "Выберите",
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
  }, [optionElements])

  const cleanInputValues = () => {
    setFormInputValues(() => ({ ...defalutParams }))
    setOptionElementsControlCheckbox(optionElementsControlCheckbox)
  }

  return (
    <div className={filter.inner}>
      <div className={filter.search} id={"searchFlat"}>
        <span className={filter.labelDrop}>Комнаты</span>
        <DropDown
          id={"flat"}
          formInputValues={formInputValues}
          setFormInputValues={setFormInputValues}
          citiesList={citiesList}
        />
        <div className={filter.containerPrice}>
          <span className={filter.labelPrice}>Цена за сутки (BYN)</span>
          <Price
            formInputValues={formInputValues}
            setFormInputValues={setFormInputValues}
          />
        </div>
        <div className={filter.showOptionContainer}>
          <ShowOption />
        </div>
        <button className={filter.cleanInput} onClick={cleanInputValues}>
          Очистить
        </button>
        <LinkPurple
          to={`/flats?city=${
            formInputValues.city === "Выберите" ? "" : formInputValues.city
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
          }&percolator=${formInputValuesMoreOptionFlats.percolator}&microwave=${
            formInputValuesMoreOptionFlats.microwave
          }&crockery=${formInputValuesMoreOptionFlats.crockery}&dishwasher=${
            formInputValuesMoreOptionFlats.dishwasher
          }&kind=tile&_page=1`}
        >
          Показать объекты
        </LinkPurple>
      </div>
      <Option
        setFormInputValues={setFormInputValues}
        formInputValues={formInputValues}
        style={{ padding: "20px 320px" }}
        optionElementsControlCheckbox={optionElementsControlCheckboxx}
        setOptionElementsControlCheckbox={setOptionElementsControlCheckbox}
      />
    </div>
  )
}
