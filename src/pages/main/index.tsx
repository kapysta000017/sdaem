import Filter from "./components/Filter"
import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useAppDispatch } from "../../store/hook/dispatch"
import {
  removeCitiesRoomsList,
  fetchAllFlats,
} from "../../store/sliceMainFlats"
import { fetchOneOption } from "../../components/stores/sliceOption"
import main from "./index.module.css"
import CategoriesCard from "./components/CategoriesCard"
import SideBarMenu from "./components/SideBarMenu"
import Slider from "./components/Slider"
import WorkPath from "./components/WorkPath/WorkPath"
import Footer from "./components/Footer/Footer"
import { fetchAllNews } from "../news/store/sliceCards"

export default function Main() {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParams = searchParams.get("category")

  useEffect(() => {
    categoryParams !== "flats" && dispatch(removeCitiesRoomsList([]))
    categoryParams === "flats" && dispatch(fetchAllFlats())
    dispatch(fetchOneOption(categoryParams))
  }, [categoryParams, dispatch])

  useEffect(() => {
    dispatch(fetchAllNews("1"))
  }, [])

  return (
    <div>
      <div style={{ padding: "0px 320px" }}>
        <Filter />
        <div className={main.menu}>
          <CategoriesCard />
          <SideBarMenu />
        </div>
        <Slider />
      </div>
      <WorkPath />
      <Footer />
    </div>
  )
}
