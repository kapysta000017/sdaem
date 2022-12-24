import info from "./info.module.css"
import mail from "./../../../assets/images/contact/socialIcon/mail.svg"
import time from "./../../../assets/images/contact/socialIcon/time.svg"
import phone from "./../../../assets/images/contact/socialIcon/phone.svg"
import map from "./../../../assets/images/contact/socialIcon/map.svg"
import whatsapp from "./../../../assets/images/contact/socialIcon/watchapp.svg"
import telegram from "./../../../assets/images/contact/socialIcon/telegram.svg"
import viber from "./../../../assets/images/contact/socialIcon/viber.svg"
import exclamation from "./../../../assets/images/contact/socialIcon/exclamation.svg"
import SocialIcon from "../../../components/SocialIcon"

export default function Info() {
  return (
    <div className={info.inner}>
      <h3 className={info.title}>Контакты</h3>
      <p className={info.paragraph}>
        Если у Вас есть пожелания, предложения или претензии по организации
        работы сайта мы всегда рады услышать Ваше мнение.
      </p>
      <div className={info.icons}>
        <div className={info.containerIcon}>
          <SocialIcon
            img={map}
            style={{
              minWidth: "30px",
              maxWidth: "30px",
              minHeight: "30px",
              maxHeight: "30px",
            }}
          />
          <div className={info.adress}>
            220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
          </div>
        </div>
        <div className={info.containerIcon}>
          <SocialIcon
            img={phone}
            style={{
              minWidth: "30px",
              maxWidth: "30px",
              minHeight: "30px",
              maxHeight: "30px",
            }}
          />
          <div className={info.phone}>
            <div className={info.phoneRight}>+375 29 621-48-33</div>
            <SocialIcon
              img={whatsapp}
              style={{
                minWidth: "30px",
                maxWidth: "30px",
                minHeight: "30px",
                maxHeight: "30px",
              }}
            />
            <SocialIcon
              img={telegram}
              style={{
                minWidth: "30px",
                maxWidth: "30px",
                minHeight: "30px",
                maxHeight: "30px",
              }}
            />
            <SocialIcon
              img={viber}
              style={{
                minWidth: "30px",
                maxWidth: "30px",
                minHeight: "30px",
                maxHeight: "30px",
              }}
            />
          </div>
        </div>
        <div className={info.containerIcon}>
          <SocialIcon
            img={mail}
            style={{
              minWidth: "30px",
              maxWidth: "30px",
              minHeight: "30px",
              maxHeight: "30px",
            }}
          />
          <a href="https://mail.ru/" className={info.mail}>
            sdaem@sdaem.by
          </a>
        </div>
        <div className={info.containerIcon}>
          <SocialIcon
            img={time}
            style={{
              minWidth: "30px",
              maxWidth: "30px",
              minHeight: "30px",
              maxHeight: "30px",
            }}
          />
          <div className={info.time}>
            <span className={info.timeText}>Режим работы:</span> 08:00-22:00
          </div>
        </div>
      </div>
      <div className={info.holder}>
        <div>ИП Шушкевич Андрей Викторович</div>
        <div>УНП 192602485 Минским горисполкомом 10.02.2016</div>
      </div>
      <div className={info.ps}>
        <img src={exclamation} alt="exclamation" />
        Администрация сайта не владеет информацией о наличии свободных квартир
      </div>
    </div>
  )
}
