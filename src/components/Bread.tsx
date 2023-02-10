import { useEffect } from "react"
import bread from "./bread.module.css"
import { Link, useParams } from "react-router-dom"
import home from "./../assets/images/news/home.svg"
import { useAppSelector } from "../store/hook/selector"
import { IBread } from "../pages/news/store/type"
import { useAppDispatch } from "../store/hook/dispatch"
import { fetchOneNewsBread } from "./stores/sliceBread"
import { updateBread } from "./stores/sliceBread"

export default function Bread({ cityName }: { cityName?: string }) {
  const breadCrumb = useAppSelector(
    (state) => state.bread.bread
  ) as Array<IBread>
  const { status } = useAppSelector((state) => state.bread)
  const { id } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    id && dispatch(fetchOneNewsBread(id))
  }, [dispatch, id])

  useEffect(() => {
    cityName === ""
      ? dispatch(
          updateBread({
            name: "Квартиры",
            link: `/flats?city=${cityName}&kind=tile&_page=1`,
          })
        )
      : dispatch(
          updateBread({
            name: cityName,
            link: `/flats?city=${cityName}&kind=tile&_page=1`,
          })
        )
  }, [cityName])

  if (status) {
    return <div className={bread.inner}>loading...</div>
  }

  return (
    <div className={bread.inner}>
      <img src={home} alt="home" />
      {breadCrumb.map((element) => (
        <Link to={element.link} className={bread.element} key={Math.random()}>
          {element.name}
        </Link>
      ))}
    </div>
  )
}
