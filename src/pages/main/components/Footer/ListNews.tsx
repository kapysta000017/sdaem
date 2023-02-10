import { useAppSelector } from "../../../../store/hook/selector"
import { selectAllNews } from "../../../news/store/sliceCards"
import news from "./listNews.module.css"
import { New } from "../../../newsDescription/store/type"
import { Link } from "react-router-dom"

export default function ListNews() {
  const allNews = useAppSelector(selectAllNews) as New[]

  return (
    <aside>
      <div className={news.inner}>
        <div className={news.title}>Новости</div>
        <ul className={news.list}>
          {allNews.slice(0, 5).map((element) => (
            <li className={news.listElement} key={element.id}>
              <Link to={`/news/${element.id}`} className={news.link}>
                {element.title}
              </Link>
              <span className={news.data}>{element.data}</span>
            </li>
          ))}
        </ul>
        <Link to="/news?_page=1" className={news.linkAll}>
          Посмотреть все
        </Link>
      </div>
    </aside>
  )
}
