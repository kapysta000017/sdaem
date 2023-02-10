import Navigation from "./components/Navigation"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    location.pathname === "/" &&
      navigate("/main?category=flats", { replace: true })
  }, [])

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
