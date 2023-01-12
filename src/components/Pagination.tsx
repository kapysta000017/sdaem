import pagination from "./pagination.module.css"
import classnames from "classnames"
import { Link, useSearchParams } from "react-router-dom"
import { useState } from "react"
import onAddNumberPagination from "./../pages/news/logic/addNumberPagination"

const Pagination = () => {
  const [paginationArray, setPagination] = useState<Array<number | string>>([
    2, 3,
  ])
  const [searchParams, setSearchParams] = useSearchParams()
  const pageNumber = searchParams.get("_page")

  return (
    <ul className={pagination.inner}>
      <Link
        to={"/news"}
        className={classnames(
          pagination.paginationElement,
          pageNumber === null ? pagination.active : null
        )}
      >
        1
      </Link>
      {paginationArray.map((element) => (
        <Link
          to={`/news?_page=${element}`}
          key={Math.random()}
          className={classnames(
            pagination.paginationElement,
            `/news?_page=${element}` === `/news?_page=${pageNumber}`
              ? pagination.active
              : null
          )}
          onClick={() => {
            onAddNumberPagination(element, paginationArray, setPagination)
          }}
        >
          {element}
        </Link>
      ))}
      <li className={pagination.paginationElement}>...</li>
    </ul>
  )
}
export default Pagination
