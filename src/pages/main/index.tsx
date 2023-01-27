import Filter from "./components/Filter"
import main from "./index.module.css"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useAppDispatch } from "../../store/hook/dispatch"
import { removeCitiesRoomsList, fetchAllHotel } from "./store/sliceMainFlats"
import { fetchOneOption } from "./store/sliceOption"
import { DefaultInputValues, InputValues } from "./store/type"
import { useAppSelector } from "../../store/hook/selector"

export default function Main() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParams = searchParams.get("category")

  const dispatch = useAppDispatch()
  const optionElements = useAppSelector((state) => state.option.options)

  const defalutParams = {
    city: "Выберите",
    rooms: "Выберите",
    priceFrom: "",
    priceTo: "",
    differentPrice: "",
  }

  const [formInputValues, setFormInputValues] = useState<
    DefaultInputValues | InputValues
  >(defalutParams)
  const formInputValuesMoreOptionFlats = formInputValues as InputValues

  const flagDisabledLink =
    formInputValuesMoreOptionFlats.city !== "Выберите" &&
    formInputValuesMoreOptionFlats.rooms !== "Выберите"

  const listParams = optionElements.map((element) => element.params)
  const objParamsAdd = listParams.reduce(
    (target: Record<string, boolean>, key) => {
      target[key] = false
      return target
    },
    {}
  )

  useEffect(() => {
    setFormInputValues((state) => ({ ...state, ...objParamsAdd }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionElements])

  useEffect(() => {
    categoryParams !== "flats" && dispatch(removeCitiesRoomsList([]))
    categoryParams === "flats" && dispatch(fetchAllHotel())
    dispatch(fetchOneOption(categoryParams))
    setFormInputValues(() => defalutParams)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryParams, dispatch])

  return (
    <div className={main.inner}>
      <Filter
        flagDisabledLink={flagDisabledLink}
        formInputValues={formInputValues}
        setFormInputValues={setFormInputValues}
        formInputValuesMoreOptionFlats={formInputValuesMoreOptionFlats}
      />
    </div>
  )
}
