import { useEffect } from "react"
import { useAppDispatch } from "../../store/hook/dispatch"
import newss from "./index.module.css"
import search from "./../../assets/images/news/search.svg"
import Cards from "./components/CardsNews"
import Bread from "../../components/Bread"
import { updateBread } from "../../components/stores/sliceBread"
import Pagination from "../../components/Pagination"
import { useSearchParams } from "react-router-dom"
import { fetchAllFlats } from "../../store/sliceMainFlats"

export default function News() {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const pageNumber = searchParams.get("_page")

  useEffect(() => {
    dispatch(updateBread({ name: "Новости", link: "/news?_page=1" }))
    dispatch(fetchAllFlats())
  }, [dispatch])

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      search: { value: string }
    }
    setSearchParams({
      _title: target.search.value,
      _page: pageNumber as string,
    })
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
      <Pagination />
    </div>
  )
}
