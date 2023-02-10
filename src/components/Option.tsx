import option from "./option.module.css"
import { useAppSelector } from "../store/hook/selector"
import { InputValues, DefaultInputValues, ControlCheckbox } from "../store/type"
import DropDown from "./DropDown"
import classnames from "classnames"
import { useLocation } from "react-router-dom"
import { useSearchParams } from "react-router-dom"

const Option: React.FC<{
  style?: React.CSSProperties
  setFormInputValues: React.Dispatch<
    React.SetStateAction<DefaultInputValues | InputValues>
  >
  formInputValues: DefaultInputValues | InputValues
  optionElementsControlCheckbox?: Array<ControlCheckbox>
  setOptionElementsControlCheckbox?: React.Dispatch<
    React.SetStateAction<Array<ControlCheckbox>>
  >
}> = ({
  style,
  setFormInputValues,
  formInputValues,
  optionElementsControlCheckbox,
  setOptionElementsControlCheckbox,
}) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParams = searchParams.get("category")
  const location = useLocation()

  const { error, status } = useAppSelector((state) => state.option)
  const districtList = useAppSelector((state) => state.flats.districtList)
  const sleepList = useAppSelector((state) => state.flats.sleepList)
  const undergroundList = useAppSelector((state) => state.flats.undergroundList)

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
    <div id="option" className={option.inner} style={style}>
      {location.pathname === "/flats" || categoryParams === "flats" ? (
        <div className={option.containerDropDown}>
          <span
            className={classnames(
              option.labelDrop,
              location.pathname === "/main" && option.labelDropMain
            )}
          >
            Спальные места
            <DropDown
              id="sleep"
              formInputValues={formInputValues}
              setFormInputValues={setFormInputValues}
              sleepList={sleepList}
              style={{ paddingRight: "100px" }}
            />
          </span>
          <span
            className={classnames(
              option.labelDrop,
              location.pathname === "/main" && option.labelDropMain
            )}
          >
            Метро
            <DropDown
              id="underground"
              formInputValues={formInputValues}
              setFormInputValues={setFormInputValues}
              undergroundList={undergroundList}
            />
          </span>
          <span
            className={classnames(
              option.labelDrop,
              location.pathname === "/main" && option.labelDropMain
            )}
          >
            Район
            <DropDown
              id="district"
              formInputValues={formInputValues}
              setFormInputValues={setFormInputValues}
              districtList={districtList}
            />
          </span>
        </div>
      ) : null}
      <div className={option.containerMoreOption}>
        {optionElementsControlCheckbox!.map((element, index) => {
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
                    setOptionElementsControlCheckbox!((state) => {
                      const obj = {
                        ...state[index],
                        check: e.target.checked,
                      }
                      state[index] = obj
                      return state
                    })
                  }}
                />
                <span className={option.styleCheckbox}></span>
                {element.name}
              </label>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Option
