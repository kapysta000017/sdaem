import pagination from "./pagination.module.css"
import classnames from "classnames"
import { Link, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import onAddNumberPagination from "./logicPagination/addNumberPagination"
import { IPagination } from "./typePagination/arrayNumber"

const Pagination = () => {
  const [paginationArray, setPagination] = useState<Array<IPagination>>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const pageNumber = searchParams.get("_page")

  useEffect(() => {
    if (pageNumber === null) {
      setPagination((state) => [...state, 2, 3])
    } else {
      let paginationArrayAdd = [] as Array<number>
      for (let i = 2; i <= Number(pageNumber); i++) {
        paginationArrayAdd.push(i)
      }
      setPagination((state) => [...state, ...paginationArrayAdd])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
