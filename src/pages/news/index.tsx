import { useEffect, useState } from "react"
import { useAppDispatch } from "../../store/hook/dispatch"
import { useAppSelector } from "../../store/hook/selector"
import { fetchAllNews, selectAllNews } from "./store/sliceNews"
import { New } from "./store/type"
import newss from "./index.module.css"

export default function News() {
  const [bread, setBread] = useState<string[]>(["Новости"])

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
    <div>
      <ul>
        {bread.map((element) => (
          <li key={Math.random()}>{element}</li>
        ))}
      </ul>
      <div className={newss.containerTitle}>
        <h3>Новости </h3>
        <form autoComplete="off" onSubmit={submit}>
          <input
            className={newss.search}
            type="search"
            name="search"
            placeholder="Поиск по статьям"
          />
          <button></button>
        </form>
      </div>
    </div>
  )
}
