import Info from "./components/Info"
import Social from "./components/Social"
import Form from "./components/Form"
import contact from "./index.module.css"
import { useEffect } from "react"
import { useAppDispatch } from "../../store/hook/dispatch"
import { fetchAllFlats } from "../../store/sliceMainFlats"

export default function Contact() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAllFlats())
  }, [])

  return (
    <div className={contact.inner}>
      <Info />
      <Form />
      <Social />
    </div>
  )
}
