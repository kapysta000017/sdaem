import { Link } from "react-router-dom"
import card from "./card.module.css"
import { New } from "../store/type"

const Cards: React.FC<{
  news: New[]
  setBread: React.Dispatch<
    React.SetStateAction<
      {
        name: string
        link: string
      }[]
    >
  >
}> = ({ news, setBread }) => {
  return (
    <div className={card.inner}>
      {news.map((element) => (
        <div className={card.card} key={element.id}>
          <img className={card.img} src={element.image} alt="новость" />
          <div className={card.infoCard}>
            <h6 className={card.titleCard}>{element.title}</h6>
            <p className={card.textCard}>{element.text}</p>
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
