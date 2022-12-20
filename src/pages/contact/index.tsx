import Info from "./components/Info"
import Social from "./components/Social"
import Form from "./components/Form"
import contact from "./index.module.css"

export default function Contact() {
  return (
    <div className={contact.inner}>
      <Info />
      <Form />
      <Social />
    </div>
  )
}
