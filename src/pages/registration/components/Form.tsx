import form from "./form.module.css"
import {
  componentUserIcon,
  componentPasswordIcon,
  componentMailIconRegistration,
} from "../../../components/componentIcon"
import Input from "../../../components/Input"
import Button from "../../../components/Button"
import ReCAPTCHA from "react-google-recaptcha"
import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function Form() {
  const captchaRef = useRef(null!)
  const navigate = useNavigate()

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      login: { value: string }
      email: { value: string }
      password: { value: string }
      repeatpassword: { value: string }
    }
    console.log(
      target.login.value,
      target.email.value,
      target.password.value,
      target.repeatpassword.value
    )
    const reset = e.target as HTMLFormElement

    const captch = captchaRef.current as {
      getValue(): string | null
      reset(): void
    }
    const token = captch.getValue()
    console.log(token)
    captch.reset()

    reset.reset()
    navigate("/registration/message", { replace: true })
  }

  return (
    <form autoComplete="off" onSubmit={submit}>
      <h5 className={form.title}>Регистрация</h5>
      <div className={form.containerInput}>
        <Input
          type="text"
          name="login"
          placeholder="Логин"
          style={{ width: "305px" }}
          child={componentUserIcon}
        />
      </div>
      <div className={form.containerEmail}>
        <Input
          type="email"
          name="email"
          placeholder="Электронная почта"
          style={{ width: "305px" }}
          child={componentMailIconRegistration}
        />
      </div>
      <div className={form.containerPassword}>
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          style={{ width: "305px" }}
          child={componentPasswordIcon}
        />
      </div>
      <div className={form.containerRepeatPassword}>
        <Input
          type="password"
          name="repeatpassword"
          placeholder="Повторите пароль"
          style={{ width: "305px" }}
          child={componentPasswordIcon}
        />
      </div>
      <ReCAPTCHA
        sitekey="6LdmfaMjAAAAAEGyBHLt7EuPe8YOJ7WxxnX09xk8"
        className={form.captch}
        ref={captchaRef}
      />
      <Button style={{ width: "305px" }}>Зарегистрироваться</Button>
    </form>
  )
}
