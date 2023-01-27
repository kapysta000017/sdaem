import navigation from "./navigation.module.css"
import classnames from "classnames"
import { Link, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Navigation() {
  const [name, setName] = useState<string | null>(null)
  useEffect(() => {
    const name = localStorage.getItem("name")
    setName(name)
  }, [])
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
            to="/main?category=flats"
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
            to="/news?_page=1"
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
          {name ? (
            <Link
              className={classnames(navigation.listActionItem, navigation.user)}
              to="/cabinet"
            >
              {name}
            </Link>
          ) : (
            <Link className={navigation.listActionItem} to="/auth">
              Вход и регистрация
            </Link>
          )}
        </li>
      </ul>
    </nav>
  )
}
