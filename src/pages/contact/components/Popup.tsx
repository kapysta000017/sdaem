import popup from "./popup.module.css"
import ReactDOM from "react-dom"

export default function Popup({
  setIsPopup,
}: {
  setIsPopup: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return ReactDOM.createPortal(
    <>
      <div className={popup.view} onClick={() => setIsPopup(false)}></div>
      <div className={popup.container}>
        <h4 className={popup.title}>Ваше письмо отправлено!</h4>
        <p className={popup.info}>
          Какое-то сообщение о том, что письмо отправлено, какое-то сообщение,
          что письмо отправлено.
        </p>
        <button className={popup.button} onClick={() => setIsPopup(false)}>
          Закрыть окно
        </button>
      </div>
    </>,
    document.getElementById("modal") as HTMLElement
  )
}
