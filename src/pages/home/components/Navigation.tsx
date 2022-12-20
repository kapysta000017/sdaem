import navigation from "./navigation.module.css"
import classnames from "classnames"
import { NavLink } from "react-router-dom"

export default function Navigation() {
  return (
    <nav className={navigation.inner}>
      <ul className={navigation.listInfo}>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? classnames(
                    navigation.listInfoItemActive,
                    navigation.listInfoItem
                  )
                : navigation.listInfoItem
            }}
            to="/"
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? classnames(
                    navigation.listInfoItemActive,
                    navigation.listInfoItem
                  )
                : navigation.listInfoItem
            }}
            to="/news"
          >
            Новости
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? classnames(
                    navigation.listInfoItemActive,
                    navigation.listInfoItem
                  )
                : navigation.listInfoItem
            }}
            to="/price"
          >
            Размещение и тарифы
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? classnames(
                    navigation.listInfoItemActive,
                    navigation.listInfoItem,
                    navigation.listInfoMap
                  )
                : classnames(navigation.listInfoItem, navigation.listInfoMap)
            }}
            to="/map"
          >
            Объявления на карте
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive
                ? classnames(
                    navigation.listInfoItemActive,
                    navigation.listInfoItem
                  )
                : navigation.listInfoItem
            }}
            to="/contacts"
          >
            Контакты
          </NavLink>
        </li>
      </ul>
      <ul className={navigation.listAction}>
        <li>
          <NavLink
            className={classnames(
              navigation.listInfoItem,
              navigation.listActionLike
            )}
            to="/bookmark"
          >
            Закладки
          </NavLink>
        </li>
        <li>
          <NavLink className={navigation.listActionItem} to="/auth">
            Вход и регистрация
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
