import exclamationWhite from "./../../../assets/images/contact/form/error/exclamationWhite.svg"
import error from "./messageError.module.css"

export default function MessageError() {
  return (
    <div className={error.inner}>
      Ошибка ввода
      <img
        src={exclamationWhite}
        alt="exclamationWhite"
        className={error.img}
      />
    </div>
  )
}
