import form from "./form.module.css"
import {
  componentLoginIcon,
  componentMailIcon,
} from "../../../components/componentIcon"
import { useState } from "react"
import Popup from "./Popup"
import Input from "../../../components/Input"

export default function Form() {
  const [isPopup, setIsPopup] = useState(false)

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPopup(true)
    const target = e.target as typeof e.target & {
      name: { value: string }
      email: { value: string }
      message: { value: string }
    }
    const reset = e.target as HTMLFormElement
    console.log(target.name.value, target.email.value, target.message.value)
    reset.reset()
  }

  return (
    <>
      {isPopup && <Popup setIsPopup={setIsPopup} />}
      <form autoComplete="off" className={form.inner} onSubmit={submit}>
        <div className={form.user}>
          <div>
            <div className={form.labelTitle}>Ваше имя</div>
            <Input
              type="text"
              name="name"
              placeholder="Логин"
              child={componentLoginIcon}
              style={{ width: "260px" }}
            />
          </div>
          <div>
            <div className={form.labelTitle}>Ваша электронная почта</div>
            <Input
              type="email"
              name="email"
              placeholder="Введите"
              child={componentMailIcon}
              style={{ width: "260px" }}
            />
          </div>
        </div>
        <div className={form.messageTitle}>Ваше сообщение</div>
        <textarea
          className={form.message}
          placeholder="Сообщение"
          name="message"
          required
        />
        <button className={form.button} type="submit">
          Отправить
        </button>
      </form>
    </>
  )
}
