import Navigation from "./components/Navigation"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

export default function Home() {
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
