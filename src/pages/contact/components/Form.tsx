import form from "./form.module.css"
import {
  componentLoginIcon,
  componentMailIcon,
} from "../../../components/componentIcon"
import { useState } from "react"
import Popup from "./Popup"
import Input from "../../../components/Input"
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form"
import { Inputs } from "../../../typeInputForm/type"

export default function Form() {
  const [isPopup, setIsPopup] = useState(false)
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
  })

  const submit: SubmitHandler<Inputs> = (data) => {
    console.log(data.login, data.email, data.message)
    setIsPopup(true)
    reset()
  }

  return (
    <>
      {isPopup && <Popup setIsPopup={setIsPopup} />}
      <form
        autoComplete="off"
        className={form.inner}
        onSubmit={handleSubmit(submit)}
      >
        <div className={form.user}>
          <div>
            <div className={form.labelTitle}>Ваше имя</div>
            <Input
              type="text"
              name="login"
              placeholder="Логин"
              child={componentLoginIcon}
              style={{ width: "260px" }}
              register={register}
              error={errors.login as FieldErrors<Inputs>}
            />
          </div>
          <div>
            <div className={form.labelTitle}>Ваша электронная почта</div>
            <Input
              type="text"
              name="email"
              placeholder="Введите"
              child={componentMailIcon}
              style={{ width: "260px" }}
              register={register}
              error={errors.email as FieldErrors<Inputs>}
            />
          </div>
        </div>
        <div className={form.messageTitle}>Ваше сообщение</div>
        <textarea
          className={errors.message ? form.messageError : form.message}
          placeholder="Сообщение"
          {...register("message", { required: true })}
        />
        <button className={form.button} type="submit">
          Отправить
        </button>
      </form>
    </>
  )
}
