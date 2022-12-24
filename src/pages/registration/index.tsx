import registration from "./index.module.css"
import Form from "./components/Form"
import Info from "./components/Info"

export default function Registration() {
  return (
    <div className={registration.inner}>
      <div className={registration.container}>
        <Form />
        <Info />
      </div>
    </div>
  )
}
