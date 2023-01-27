import Navigation from "./components/Navigation"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { useAppDispatch } from "../../store/hook/dispatch"
import { useEffect } from "react"
import { fetchAllHotel } from "./../main/store/sliceMainFlats"

export default function Home() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllHotel())
  }, [dispatch])

  return (
    <>
      <div id="modal"></div>
      <Navigation />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
