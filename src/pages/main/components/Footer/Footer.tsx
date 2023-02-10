import footer from "./footer.module.css"
import Info from "./Info"
import ListNews from "./ListNews"

export default function Footer() {
  return (
    <div className={footer.inner}>
      <Info />
      <ListNews />
    </div>
  )
}
