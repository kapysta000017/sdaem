import option from "./option.module.css"
import { useAppSelector } from "../store/hook/selector"
import { InputValues, DefaultInputValues } from "../pages/main/store/type"

const Option: React.FC<{
  style: React.CSSProperties
  formInputValuesMoreOptionFlats: Record<string, string | boolean | number>
  setFormInputValues: React.Dispatch<
    React.SetStateAction<DefaultInputValues | InputValues>
  >
}> = ({ style, formInputValuesMoreOptionFlats, setFormInputValues }) => {
  const optionElements = useAppSelector((state) => state.option.options)
  const { error, status } = useAppSelector((state) => state.option)

  const optionElementsControlCheckbox = optionElements.map((element) => ({
    ...element,
    check: formInputValuesMoreOptionFlats[element.params],
  }))

  if (error) {
    return (
      <div className={option.inner} style={style}>
        ошибка
      </div>
    )
  }

  if (status) {
    return (
      <div className={option.inner} style={style}>
        loading...
      </div>
    )
  }

  return (
    <div className={option.inner} style={style}>
      {optionElementsControlCheckbox.map((element) => {
        return (
          <div key={element.id}>
            <label className={option.labelCheckbox}>
              <input
                type="checkbox"
                className={option.defaultCheckbox}
                checked={element.check as boolean}
                onChange={(e) => {
                  setFormInputValues((state) => ({
                    ...state,
                    [element.params]: e.target.checked,
                  }))
                }}
              />
              <span className={option.styleCheckbox}></span>
              {element.name}
            </label>
          </div>
        )
      })}
    </div>
  )
}
export default Option
