import info from "./info.module.css"
import { Link } from "react-router-dom"

export default function Info() {
  return (
    <div className={info.textContainer}>
      <span className={info.textAbout}>Пользователь обязуется:</span>
      <div className={info.text}>
        <ul>
          <li>
            предоставлять достоверную и актуальную информацию при регистрации и
            добавлении объекта;
          </li>
          <li>
            добавлять фотографии объектов соответствующие действительности.
            Администрация сайта sdaem.by оставляет за собой право удалять любую
            информацию, размещенную пользователем, если сочтет, что информация
            не соответствует действительности, носит оскорбительный характер,
            нарушает права и законные интересы других граждан либо действующее
            законодательство Республики Беларусь.
          </li>
        </ul>
        <div className={info.auth}>
          Уже есть аккаунта?
          <Link to="/auth" className={info.authLink}>
            Войдите
          </Link>
        </div>
      </div>
    </div>
  )
}
