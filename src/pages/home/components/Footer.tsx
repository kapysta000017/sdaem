import footer from "./footer.module.css"
import logo from "./../../../assets/images/footer/logo.png"
import inst from "./../../../assets/images/footer/insta.svg"
import vk from "./../../../assets/images/footer/vk.svg"
import faceb from "./../../../assets/images/footer/facebook.svg"
import belkart from "./../../../assets/images/footer/belkart.svg"
import byvisa from "./../../../assets/images/footer/by-visa.svg"
import master from "./../../../assets/images/footer/mastercard.svg"
import masterr from "./../../../assets/images/footer/mastersecurecode.svg"
import webpay from "./../../../assets/images/footer/webpay.svg"
import visa from "./../../../assets/images/footer/visa.svg"
import { Link } from "react-router-dom"
import classnames from "classnames"
import { useAppSelector } from "../../../store/hook/selector"

export default function Footer() {
  const citiesList = useAppSelector(
    (state) => state.flats.citiesListFooterHeader
  )

  return (
    <footer className={footer.inner}>
      <div className={footer.info}>
        <Link to="/main?category=flats">
          <img src={logo} alt="logo" className={footer.logo} />
        </Link>
        <span className={footer.logoText}>СДАЁМ БАЙ</span>
        <div className={footer.text}>
          <div>ИП Шушкевич Андрей Викторович</div>
          <div>УНП 192602485 Минским горисполкомом</div>
          <div>10.02.2016</div>
          <div>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</div>
          <div>+375 29 621 48 33, sdaem@sdaem.by</div> Режим работы: 08:00-22:00
        </div>
      </div>
      <div>
        <div className={footer.links}>
          <div className={classnames(footer.list, footer.listGap)}>
            <Link to="/home" className={footer.linkBold}>
              Коттеджи и усадьбы
            </Link>
            <Link to="/bath" className={footer.linkBold}>
              Бани и сауны
            </Link>
            <Link to="/car" className={footer.linkBold}>
              Авто на прокат
            </Link>
          </div>
          <div className={classnames(footer.list)}>
            <div className={classnames(footer.linkBold, footer.linkFlat)}>
              Квартиры
            </div>
            <div className={footer.listCities}>
              {citiesList.map((element) => {
                return (
                  <Link
                    to={`/flats?city=${element}&kind=tile&_page=1`}
                    className={footer.linkGray}
                    key={Math.random()}
                  >
                    {`Квартиры ${element}`}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className={classnames(footer.list, footer.listPosition)}>
            <Link to="/news" className={footer.linkGray}>
              Новости
            </Link>
            <Link to="/price" className={footer.linkGray}>
              Размещение и тарифы
            </Link>
            <Link to="/map" className={footer.linkGray}>
              Объявления на карте
            </Link>
            <Link to="/contacts" className={footer.linkGray}>
              Контакты
            </Link>
          </div>
        </div>
        <div className={footer.social}>
          <div className={footer.socialIcons}>
            <div className={footer.socialInfo}>Мы в соцсетях</div>
            <a href="https://www.vk.com/">
              <img src={inst} alt="instargram" className={footer.inst} />
            </a>
            <a href="https://www.vk.com/">
              <img src={vk} alt="vk" className={footer.vk} />
            </a>
            <a href="https://www.vk.com/">
              <img src={faceb} alt="facebook" className={footer.facebook} />
            </a>
          </div>
          <div className={footer.socialPay}>
            <img src={belkart} alt="belkart" />
            <img src={byvisa} alt="byvisa" />
            <img src={master} alt="master" />
            <img src={masterr} alt="masterr" />
            <img src={webpay} alt="webpay" />
            <img src={visa} alt="visa" />
          </div>
        </div>
      </div>
    </footer>
  )
}
