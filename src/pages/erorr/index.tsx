import error from "./index.module.css"
import { Link } from "react-router-dom"
import status from "./../../assets/images/error/status.png"
import points from "./../../assets/images/error/points.svg"

export default function Erorr() {
  return (
    <div className={error.inner}>
      <img src={points} alt="points" className={error.pointsLeft} />
      <img src={points} alt="points" className={error.pointsRight} />
      <div>
        <h1 className={error.title}>Ошибка 404</h1>
        <p className={error.text}>
          Возможно, у вас опечатка в адресе страницы, или её просто не
          существует
        </p>
        <Link className={error.link} to="/main?category=flats">
          Вернутся на главную
        </Link>
      </div>
      <img src={status} alt="404" />
    </div>
  )
}
