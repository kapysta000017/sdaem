import { useEffect, useState } from "react"
import { useAppDispatch } from "../../store/hook/dispatch"
import newss from "./index.module.css"
import search from "./../../assets/images/news/search.svg"
import Cards from "../../components/Cards"
import Bread from "../../components/Bread"
import { updateBread } from "./store/sliceBread"
import { Link, useSearchParams } from "react-router-dom"
import classnames from "classnames"
import onAddNumberPagination from "./logic/addNumberPagination"

export default function News() {
  const [pagination, setPagination] = useState<Array<number | string>>([2, 3])

  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const pageNumber = searchParams.get("_page")

  useEffect(() => {
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
      <ul className={newss.pagination}>
        <Link
          to={"/news"}
          className={classnames(
            newss.paginationElement,
            pageNumber === null ? newss.active : null
          )}
        >
          1
        </Link>
        {pagination.map((element) => (
          <Link
            to={`/news?_page=${element}`}
            key={Math.random()}
            className={classnames(
              newss.paginationElement,
              `/news?_page=${element}` === `/news?_page=${pageNumber}`
                ? newss.active
                : null
            )}
            onClick={() => {
              onAddNumberPagination(element, pagination, setPagination)
            }}
          >
            {element}
          </Link>
        ))}
        <li className={newss.paginationElement}>...</li>
      </ul>
    </div>
  )
}
