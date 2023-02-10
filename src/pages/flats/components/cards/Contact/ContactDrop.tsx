import contact from "./contactDrop.module.css"
import phoneSvg from "./../../../../../assets/images/flats/card/phone.svg"
import { ContactFlat } from "../../../../../store/type"
import viberSvg from "./../../../../../assets/images/flats/card/viber.svg"
import whatsappSvg from "./../../../../../assets/images/flats/card/whatsapp.svg"
import mailSvg from "./../../../../../assets/images/flats/card/mail.svg"
import SocialIcon from "./SocialIcon"

export default function Contact({
  user,
  id,
}: {
  user: ContactFlat
  id: string
}) {
  return (
    <div style={{ position: "relative" }}>
      <button
        className={contact.btn}
        onClick={(e) => {
          document.getElementById(id)!.classList.toggle(contact.show)
          const target = e.target as typeof e.target
          const element = target as HTMLElement
          element.classList.toggle(contact.btnBackground)
        }}
      >
        <img src={phoneSvg} alt="phone" />
        Контакты
      </button>
      <div className={contact.downContent} id={id}>
        <img src={user.avatar} className={contact.avatar} alt="avatar" />
        <div className={contact.user}>Владелец</div>
        <div className={contact.userName}>{user.name}</div>
        <div className={contact.userPhone}>{user.phone}</div>
        <a href="https://mail.ru/" className={contact.userMail}>
          {user.email}
        </a>
        <div className={contact.userSocial}>
          <SocialIcon
            svg={viberSvg}
            style={{ background: "rgba(123, 81, 157, 1)" }}
            to="https://mail.ru/"
          />
          <SocialIcon
            svg={whatsappSvg}
            style={{ background: "#0DBB41" }}
            to="https://mail.ru/"
          />
          <SocialIcon
            svg={mailSvg}
            style={{ background: "#664EF9" }}
            to="https://mail.ru/"
          />
        </div>
      </div>
    </div>
  )
}
