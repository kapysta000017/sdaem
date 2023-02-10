import price from "./price.module.css"
import { DefaultInputValues, InputValues } from "../store/type"

export default function Price({
  setFormInputValues,
  formInputValues,
}: {
  setFormInputValues: React.Dispatch<
    React.SetStateAction<DefaultInputValues | InputValues>
  >
  formInputValues: DefaultInputValues
}) {
  return (
    <div className={price.inner}>
      <input
        className={price.priceInput}
        type="number"
        placeholder="От"
        onChange={(e) => {
          setFormInputValues((state) => ({
            ...state,
            priceFrom: e.target.value,
          }))
          setFormInputValues((state) => ({
            ...state,
            differentPrice: Number(state.priceTo) - Number(state.priceFrom),
          }))
        }}
        value={formInputValues.priceFrom}
      />
      <span className={price.pricesBetween}>-</span>
      <input
        className={price.priceInput}
        type="number"
        placeholder="До"
        onChange={(e) => {
          setFormInputValues((state) => ({ ...state, priceTo: e.target.value }))
          setFormInputValues((state) => ({
            ...state,
            differentPrice: Number(state.priceTo) - Number(state.priceFrom),
          }))
        }}
        value={formInputValues.priceTo}
      />
    </div>
  )
}
