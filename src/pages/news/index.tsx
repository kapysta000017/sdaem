import { useEffect, useState } from "react"
import { useAppDispatch } from "../../store/hook/dispatch"
import { useAppSelector } from "../../store/hook/selector"
import { fetchAllNews, selectAllNews } from "./store/sliceNews"
import { New } from "./store/type"
import newss from "./index.module.css"
import search from "./../../assets/images/news/search.svg"
import home from "./../../assets/images/news/home.svg"
import { NavLink } from "react-router-dom"
import Cards from "./components/Cards"

export default function News() {
  const [bread, setBread] = useState<{ name: string; link: string }[]>([
    { name: "Новости", link: "/news" },
    { name: "lskdjf", link: "/news/1" },
  ])

  const dispatch = useAppDispatch()
  const news = useAppSelector(selectAllNews) as New[]

  useEffect(() => {
    dispatch(fetchAllNews())
  }, [dispatch])

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      search: { value: string }
    }
    console.log(target.search.value)
  }
  return (
    <div className={newss.inner}>
      <ul className={newss.bread}>
        <img src={home} alt="home" />
        {bread.map((element) => (
          <NavLink
            to={element.link}
            className={newss.breadElement}
            key={Math.random()}
          >
            {element.name}
          </NavLink>
        ))}
      </ul>
      <div className={newss.containerTitle}>
        <h3 className={newss.title}>Новости </h3>
        <form className={newss.form} autoComplete="off" onSubmit={submit}>
          <input
            className={newss.search}
            type="search"
            name="search"
            placeholder="Поиск по статьям"
          />
          <button className={newss.button}>
            <img className={newss.searchIcon} src={search} alt="search" />
          </button>
        </form>
      </div>
      <Cards news={news} setBread={setBread} />
    </div>
  )
}
