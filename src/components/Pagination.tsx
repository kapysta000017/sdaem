import pagination from "./pagination.module.css"
import classnames from "classnames"
import { useSearchParams } from "react-router-dom"
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
  }, [])

  return (
    <ul className={pagination.inner}>
      {paginationArray.map((element) => (
        <li key={Math.random()}>
          <div
            className={classnames(
              pagination.paginationElement,
              `/news?_page=${element}` === `/news?_page=${pageNumber}`
                ? pagination.active
                : null
            )}
            onClick={() => {
              searchParams.set("_page", String(element))
              setSearchParams(searchParams)
              onAddNumberPagination(element, paginationArray, setPagination)
            }}
          >
            {element}
          </div>
        </li>
      ))}
      <li className={pagination.paginationElementContinue}>...</li>
    </ul>
  )
}
export default Pagination
