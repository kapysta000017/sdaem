import { useEffect } from "react"
import { useAppDispatch } from "../../store/hook/dispatch"
import { fetchAllNews } from "./store/sliceNews"
import newss from "./index.module.css"
import search from "./../../assets/images/news/search.svg"
import Cards from "./components/Cards"
import Bread from "../../components/Bread"
import { updateBread } from "./store/sliceBread"

export default function News() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllNews())
    dispatch(updateBread({ name: "Новости", link: "/news" }))
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
      <Bread />
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
      <Cards />
    </div>
  )
}
