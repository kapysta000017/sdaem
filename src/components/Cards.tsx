import { Link } from "react-router-dom"
import card from "./cards.module.css"
import { New } from "../pages/news/store/type"
import { useAppSelector } from "../store/hook/selector"
import { selectAllNews } from "../pages/news/store/sliceCards"
import { useEffect } from "react"
import { useAppDispatch } from "../store/hook/dispatch"
import { fetchAllNews } from "../pages/news/store/sliceCards"
import { useSearchParams } from "react-router-dom"

const Cards: React.FC<{ amount?: number; style?: React.CSSProperties }> = ({
  amount,
  style,
}) => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const pageNumber = searchParams.get("_page")

  const news = useAppSelector(selectAllNews) as New[]
  const { error, status } = useAppSelector((state) => state.news)
  if (typeof amount === "number") news.length = amount

  useEffect(() => {
    dispatch(fetchAllNews(pageNumber))
  }, [dispatch, pageNumber])

  if (error) {
    return <div className={card.inner}>ошибка</div>
  }
  if (status) {
    return <div className={card.inner}>loading...</div>
  }
  if (news.length === 0) {
    return (
      <div className={card.inner}>
        таких новостей нет, вернитесь на шаг назад
      </div>
    )
  }

  return (
    <div className={card.inner} style={style}>
      {news.map((element) => (
        <div className={card.container} key={element.id}>
          <img className={card.img} src={element.image} alt="новость" />
          <div className={card.info}>
            <h6 className={card.title}>{element.title}</h6>
            <p className={card.text}>{element.text}</p>
            <div className={card.ps}>
              <span className={card.data}>{element.data}</span>
              <Link className={card.link} to={`/news/${element.id}`}>
                Читать
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
