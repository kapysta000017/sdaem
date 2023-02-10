import message from "./index.module.css"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"

export default function RegistrationMessage() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate("/auth", { replace: true })
  }
  return (
    <div className={message.inner}>
      <div className={message.container}>
        <h5 className={message.title}>Подтвердите регистрацию</h5>
        <p className={message.text}>
          Письмо для подтверждения аккаунта отправлено почту. Перейдите по
          ссылке, указанной в письме. Если письма нет, то проверьте спам.
        </p>
        <Button style={{ width: "117px" }} goBack={goBack}>
          Понятно
        </Button>
      </div>
    </div>
  )
}
