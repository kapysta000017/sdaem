import card from "./card.module.css"
import { Flat } from "../../../../../store/type"
import userSvg from "./../../../../../assets/images/flats/card/user.svg"
import mapSvg from "./../../../../../assets/images/flats/card/map.svg"
import undergroundSvg from "./../../../../../assets/images/flats/card/underground.svg"
import districtSvg from "./../../../../../assets/images/flats/card/point.svg"
import Contact from "../Contact/ContactDrop"
import MoreInfo from "../MoreInfo"
import LabelGold from "../LabelGold"
import LikeHeart from "./LikeHeart"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "swiper/css/pagination"
import "swiper/css"
import button from "./sliderArrow.module.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import classnames from "classnames"
import { useLocation } from "react-router-dom"

export default function Card({
  element,
  flagRemoveElement,
}: {
  element: Flat
  flagRemoveElement?: boolean
}) {
  const location = useLocation()

  return (
    <div className={card.container}>
      <LabelGold />
      {location.pathname === "/flats" && (
        <div
          className={classnames(
            button.swiperButton,
            button.swiperButtonNext,
            button.swiperButtonNext + element.id
          )}
        >
          <IoIosArrowForward style={{ color: "#ffffff" }} />
        </div>
      )}
      {location.pathname === "/flats" && (
        <div
          className={classnames(
            button.swiperButton,
            button.swiperButtonPrev,
            button.swiperButtonPrev + element.id
          )}
        >
          <IoIosArrowBack style={{ color: "#ffffff" }} />
        </div>
      )}
      {location.pathname === "/flats" && (
        <Swiper
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: `.${button.swiperButtonNext + element.id}`,
            prevEl: `.${button.swiperButtonPrev + element.id}`,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className={card.swiperPointTile}
        >
          {element.img.map((img) => (
            <SwiperSlide key={Math.random()}>
              <img src={img} alt="room" className={card.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {location.pathname === "/main" && (
        <img src={element.img[0]} alt="room" className={card.img} />
      )}
      <div className={card.info}>
        <div className={card.details}>
          <span className={card.price}>{element.price} BYN</span>
          <div className={card.sleepRooms}>
            {flagRemoveElement && (
              <span className={card.area}>{element.area} м²</span>
            )}
            <div className={card.sleep}>
              <img src={userSvg} alt="user" />
              <span>{element.sleep}</span>
            </div>
            <span className={card.rooms}>{element.rooms} комн.</span>
          </div>
        </div>
        <div className={card.place}>
          <span className={card.street}>
            <img src={mapSvg} alt="map" />
            {element.street}
          </span>
          <div className={card.undergroundDistrict}>
            <span className={card.underground}>
              <img src={undergroundSvg} alt="underground" />
              <span className={card.undergroundText}>
                {element.underground}
              </span>
            </span>
            <span className={card.district}>
              <img src={districtSvg} alt="point" />
              <span className={card.districtText}>{element.district}</span>
            </span>
          </div>
        </div>
        <p className={card.text}>{element.text}</p>
        <div className={card.actions}>
          {!flagRemoveElement && <LikeHeart element={element} />}
          <Contact user={element.contactUser} id={element.id} />
          <MoreInfo />
        </div>
      </div>
    </div>
  )
}
