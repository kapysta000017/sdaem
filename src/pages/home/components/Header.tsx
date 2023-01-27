import logo from "./../../../assets/images/header/logo.png"
import header from "./header.module.css"
import { Link } from "react-router-dom"
import classnames from "classnames"

export default function Header() {
  return (
    <header>
      <nav className={header.inner}>
        <Link to="/">
          <img src={logo} className={header.logo} alt="logo" />
        </Link>
        <Link to="/flat" className={classnames(header.item, header.itemMap)}>
          Квартиры на сутки
        </Link>
        <Link to="/home" className={header.item}>
          Коттеджи и усадьбы
        </Link>
        <Link to="/bath" className={header.item}>
          Бани и Сауны
        </Link>
        <Link to="/car" className={header.item}>
          Авто напрокат
        </Link>
        <Link to="/add" className={header.add}>
          Разместить объявление
        </Link>
      </nav>
    </header>
  )
}
