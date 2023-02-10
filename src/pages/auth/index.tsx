import auth from "./index.module.css"
import Input from "../../components/Input"
import {
  componentUserIcon,
  componentPasswordIcon,
} from "../../components/componentIcon"
import { Link, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import { useForm, SubmitHandler, FieldErrors } from "react-hook-form"
import { Inputs } from "../../typeInputForm/type"

export default function Auth() {
  const navigate = useNavigate()
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    mode: "onBlur",
  })

  const submit: SubmitHandler<Inputs> = (data) => {
    console.log(data.login, data.password)
    navigate("/", { replace: true })

    localStorage.setItem("name", data.login)
    reset()
  }

  return (
    <div className={auth.inner}>
      <form
        autoComplete="off"
        className={auth.container}
        onSubmit={handleSubmit(submit)}
      >
        <h5 className={auth.title}>Авторизация</h5>
        <div className={auth.text}>
          Авторизируйтесь, чтобы начать публиковать свои объявления
        </div>
        <div className={auth.labelContainer}>
          <Input
            child={componentUserIcon}
            placeholder="Логин"
            type="text"
            name="login"
            style={{ width: "305px" }}
            register={register}
            error={errors.login as FieldErrors<Inputs>}
          />
        </div>
        <div className={auth.labelContainer}>
          <Input
            child={componentPasswordIcon}
            placeholder="Пароль"
            type="password"
            name="password"
            style={{ width: "305px" }}
            register={register}
            error={errors.password as FieldErrors<Inputs>}
          />
        </div>
        <div className={auth.passwordInfo}>
          <label className={auth.switch}>
            <input className={auth.checkbox} type="checkbox" />
            <span className={auth.slider}></span>
          </label>
          <span className={auth.keepUser}>Запомнить меня</span>
          <Link to="/newPassword" className={auth.newPassword}>
            Забыли пароль?
          </Link>
        </div>
        <Button style={{ background: "#FFD54F", width: "305px" }}>Войти</Button>
        <div className={auth.containerCreateUser}>
          <span className={auth.psCreate}>Еще нет аккаунта?</span>
          <Link className={auth.createUser} to="/registration">
            Создайте аккаунт
          </Link>
        </div>
      </form>
    </div>
  )
}
