import { Link } from "react-router-dom"
import card from "./cards.module.css"
import { New } from "../store/type"
import { useAppSelector } from "../../../store/hook/selector"
import { selectAllNews } from "../store/sliceCards"
import { useEffect } from "react"
import { useAppDispatch } from "../../../store/hook/dispatch"
import { fetchAllNews } from "../store/sliceCards"

const Cards: React.FC<{ amount?: number; style?: React.CSSProperties }> = ({
  amount,
  style,
}) => {
  const news = useAppSelector(selectAllNews) as New[]
  const { error, status } = useAppSelector((state) => state.news)
  const dispatch = useAppDispatch()
  if (typeof amount === "number") news.length = amount

  useEffect(() => {
    dispatch(fetchAllNews())
  }, [dispatch])

  if (error) {
    return <div className={card.inner}>ошибка</div>
  }
  if (status) {
    return <div className={card.inner}>loading...</div>
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
