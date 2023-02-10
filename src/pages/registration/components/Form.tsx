import form from "./form.module.css"
import {
  componentUserIcon,
  componentPasswordIcon,
  componentMailIconRegistration,
} from "../../../components/componentIcon"
import Input from "../../../components/Input"
import Button from "../../../components/Button"
import ReCAPTCHA from "react-google-recaptcha"
import { useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form"
import { Inputs } from "../../../typeInputForm/type"
import MessageError from "./MessageError"

export default function Form() {
  const captchaRef = useRef(null!)
  const navigate = useNavigate()
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    setError,
    watch,
    clearErrors,
  } = useForm<Inputs>({ mode: "onBlur" })

  const watchPassword = watch("password")
  const watchRepeatpassWord = watch("repeatpassword")

  useEffect(() => {
    if (watchPassword !== watchRepeatpassWord) {
      setError("customError", { type: "custom" })
    } else {
      clearErrors("customError")
    }
  }, [watchPassword, watchRepeatpassWord])

  const submit: SubmitHandler<Inputs> = (data) => {
    console.log(data.email, data.login, data.password, data.repeatpassword)
    const captch = captchaRef.current as {
      getValue(): string | null
      reset(): void
    }
    const token = captch.getValue()
    console.log(token)
    captch.reset()
    reset()
    navigate("/registration/message", { replace: true })
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit(submit)}>
      <h5 className={form.title}>Регистрация</h5>
      <div className={form.containerInput}>
        <Input
          type="text"
          name="login"
          placeholder="Логин"
          style={{ width: "305px" }}
          child={componentUserIcon}
          register={register}
          error={errors.login as FieldErrors<Inputs>}
        />
      </div>
      <div className={form.containerEmail}>
        <Input
          type="text"
          name="email"
          placeholder="Электронная почта"
          style={{ width: "305px" }}
          child={componentMailIconRegistration}
          register={register}
          error={errors.email as FieldErrors<Inputs>}
        />
      </div>
      <div className={form.containerPassword}>
        <Input
          type="password"
          name="password"
          placeholder="Пароль"
          style={{ width: "305px" }}
          child={componentPasswordIcon}
          register={register}
          error={errors.password as FieldErrors<Inputs>}
        />
      </div>
      <div className={form.containerRepeatPassword}>
        <Input
          type="password"
          name="repeatpassword"
          placeholder="Повторите пароль"
          style={{ width: "305px" }}
          child={componentPasswordIcon}
          register={register}
          error={errors.customError as FieldErrors<Inputs>}
        />
      </div>
      <ReCAPTCHA
        sitekey="6LdmfaMjAAAAAEGyBHLt7EuPe8YOJ7WxxnX09xk8"
        className={form.captch}
        ref={captchaRef}
      />

      {errors.email ||
      errors.login ||
      errors.password ||
      errors.repeatpassword ||
      errors.customError ? (
        <MessageError />
      ) : null}
      <Button style={{ width: "305px" }}>Зарегистрироваться</Button>
    </form>
  )
}
