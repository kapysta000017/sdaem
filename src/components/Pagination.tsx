import pagination from "./pagination.module.css"
import classnames from "classnames"
import { Link, useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react"
import onAddNumberPagination from "./logicPagination/addNumberPagination"
import { IPagination } from "./typePagination/arrayNumber"

const Pagination = () => {
  const [paginationArray, setPagination] = useState<Array<IPagination>>([])
  const [searchParams, setSearchParams] = useSearchParams()
  let pageNumber = searchParams.get("_page")

  useEffect(() => {
    let paginationArrayAdd = [] as Array<number>
    for (let i = 1; i <= Number(pageNumber) + 2; i++) {
      paginationArrayAdd.push(i)
      if (paginationArrayAdd.length > 15) break
    }
    setPagination((state) => [...state, ...paginationArrayAdd])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ul className={pagination.inner}>
      {paginationArray.map((element) => (
        <li key={Math.random()}>
          <Link
            to={`/news?_page=${element}`}
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
        </li>
      ))}
      <li className={pagination.paginationElementContinue}>...</li>
    </ul>
  )
}
export default Pagination
