import { Flat } from "../../../../../store/type"
import list from "./listKind.module.css"
import mapList from "./../../../../../assets/images/flats/card/mapList.svg"
import userSvg from "./../../../../../assets/images/flats/card/user.svg"
import underground from "./../../../../../assets/images/flats/card/underground.svg"
import Contact from "../Contact/ContactDrop"
import LikeHeartSpan from "./LikeHeartSpan"
import MoreInfo from "../MoreInfo"
import LabelGold from "../LabelGold"
import { useSearchParams } from "react-router-dom"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import "swiper/css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import classnames from "classnames"
import button from "./sliderArrow.module.css"

export default function ListKind({ flats }: { flats: Flat[] }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const pageNumber = searchParams.get("_page")
  const amountCards = 3 * Number(pageNumber)

  return (
    <div className={list.inner}>
      {amountCards - 3 > flats.length && (
        <div>Квартиры закончились, вернитесь на шаг назад</div>
      )}
      {flats.slice(amountCards - 3, amountCards).map((element) => {
        return (
          <div className={list.container} key={element.id}>
            <LabelGold style={{ right: "702px" }} />
            <div
              className={classnames(
                button.swiperButton,
                button.swiperButtonNext,
                button.swiperButtonNext + element.id
              )}
            >
              <IoIosArrowForward style={{ color: "#ffffff" }} />
            </div>

            <div
              className={classnames(
                button.swiperButton,
                button.swiperButtonPrev,
                button.swiperButtonPrev + element.id
              )}
            >
              <IoIosArrowBack style={{ color: "#ffffff" }} />
            </div>

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
              className={classnames(list.swiperPointTile, list.swiper)}
            >
              {element.img.map((img) => (
                <SwiperSlide key={Math.random()}>
                  <img src={img} alt="room" className={list.img} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className={list.info}>
              <div className={list.title}>
                <div className={list.rooms}>
                  {element.rooms}-комн. апартаменты у метро{" "}
                  {element.underground}
                </div>
                <span className={list.price}>{element.price}</span>
              </div>
              <div className={list.street}>
                <img src={mapList} alt="map" />
                {element.city}, {element.street}
              </div>
              <div className={list.details}>
                <div className={list.sleep}>
                  <img src={userSvg} alt="user" />
                  {element.sleep}
                </div>
                <span className={list.roomsAmount}>{element.rooms} комн.</span>
                <div className={list.underground}>
                  <img
                    src={underground}
                    alt="underground"
                    style={{ width: "20px", height: "12px" }}
                  />
                  {element.underground}
                </div>
                <span className={list.district}>район: {element.district}</span>
              </div>
              <p className={list.text}>{element.text}</p>
              <div className={list.actions}>
                <div className={list.containerContactLike}>
                  <Contact user={element.contactUser} id={element.id} />
                  <LikeHeartSpan element={element} />
                </div>
                <MoreInfo />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
