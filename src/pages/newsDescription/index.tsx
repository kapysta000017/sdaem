import Bread from "../../components/Bread"
import description from "./index.module.css"
import { useEffect } from "react"
import { useAppDispatch } from "../../store/hook/dispatch"
import { fetchOneNews } from "./store/sliceOneNews"
import { useAppSelector } from "../../store/hook/selector"
import { useParams } from "react-router-dom"
import SocialIcon from "../../components/SocialIcon"
import facebook from "../../assets/images/news/svg/facebook.svg"
import whatsapp from "../../assets/images/news/svg/whatsapp.svg"
import telegram from "../../assets/images/news/svg/telegram.svg"
import viber from "../../assets/images/news/svg/viber.svg"
import vk from "../../assets/images/news/svg/vk.svg"
import Cards from "../news/components/CardsNews"
import { fetchAllFlats } from "../../store/sliceMainFlats"

export default function NewsDescription() {
  const dispatch = useAppDispatch()
  const oneNews = useAppSelector((state) => state.oneNews.oneNews)
  const { status, error } = useAppSelector((state) => state.oneNews)
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchOneNews(id))
    dispatch(fetchAllFlats())
  }, [dispatch, id])

  if (error) {
    return <div className={description.inner}>Такой новости нету</div>
  }
  if (status) {
    return <div className={description.inner}>loading...</div>
  }
  return (
    <article>
      <div className={description.inner}>
        <Bread />
        <h3 className={description.title}>{oneNews.title}</h3>
        <div className={description.socialInfo}>
          <span className={description.data}>{oneNews.data}</span>
          <div className={description.icons}>
            <span className={description.share}>Поделиться</span>
            <SocialIcon
              img={facebook}
              style={{
                minWidth: "35px",
                maxWidth: "35px",
                minHeight: "35px",
                maxHeight: "35px",
                backgroundColor: "rgba(102, 78, 249, 0.1)",
              }}
              link={true}
            />
            <SocialIcon
              img={whatsapp}
              style={{
                minWidth: "35px",
                maxWidth: "35px",
                minHeight: "35px",
                maxHeight: "35px",
                backgroundColor: "rgba(102, 78, 249, 0.1)",
              }}
              link={true}
            />
            <SocialIcon
              img={telegram}
              style={{
                minWidth: "35px",
                maxWidth: "35px",
                minHeight: "35px",
                maxHeight: "35px",
                backgroundColor: "rgba(102, 78, 249, 0.1)",
              }}
              link={true}
            />
            <SocialIcon
              img={viber}
              style={{
                minWidth: "35px",
                maxWidth: "35px",
                minHeight: "35px",
                maxHeight: "35px",
                backgroundColor: "rgba(102, 78, 249, 0.1)",
              }}
              link={true}
            />
            <SocialIcon
              img={vk}
              style={{
                minWidth: "35px",
                maxWidth: "35px",
                minHeight: "35px",
                maxHeight: "35px",
                backgroundColor: "rgba(102, 78, 249, 0.1)",
              }}
              link={true}
            />
          </div>
        </div>
        <img className={description.img} src={oneNews.image} alt="новость" />
        <p className={description.text}>{oneNews.text}</p>
      </div>
      <div className={description.cards}>
        <h6 className={description.cardsTitle}>Читайте также</h6>
        <Cards
          amount={3}
          style={{
            gridTemplateRows: "none",
          }}
        />
      </div>
    </article>
  )
}
