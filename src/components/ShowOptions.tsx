import classnames from "classnames"
import { useSearchParams } from "react-router-dom"
import iconOption from "./../assets/images/main/option.svg"
import option from "./showOption.module.css"

export default function ShowOption() {
  const [searchParams, setSearchParams] = useSearchParams()
  const optionParams = searchParams.get("option")
  const categoryParams = searchParams.get("category")

  const addMoreOption = () => {
    if (optionParams === "false" || optionParams === null) {
      setSearchParams({
        category: categoryParams as string,
        option: "true",
      })
    } else {
      setSearchParams({
        category: categoryParams as string,
        option: "false",
      })
    }
  }

  return (
    <div
      className={classnames(
        option.inner,
        optionParams === "true" && option.innerChoose
      )}
      onClick={addMoreOption}
    >
      Больше опций
      <img src={iconOption} alt="option" />
    </div>
  )
}
