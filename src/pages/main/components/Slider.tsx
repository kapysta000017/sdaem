import slider from "./slider.module.css"
import { useEffect, useState } from "react"
import DropDown from "../../../components/DropDown"
import { useAppSelector } from "../../../store/hook/selector"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"
import { selectAllFlats } from "../../../store/sliceMainFlats"
import { Flat } from "../../../store/type"
import Card from "../../flats/components/cards/TileKind/Card"
import button from "./sliderArrow.module.css"
import LinkPurple from "./../../../components/LinkPurple"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import classnames from "classnames"

export default function Slider() {
  const districtList = useAppSelector((state) => state.flats.districtList)
  const undergroundList = useAppSelector((state) => state.flats.undergroundList)
  const flats = useAppSelector(selectAllFlats) as Flat[]
  const amountMinsk = flats.filter((element) => element.city === "Минск").length

  const [formInputValues, setFormInputValues] = useState({
    underground: "Метро",
    district: "Район",
  })

  const [filterFlats, setFilterFlats] = useState<Flat[]>([])
  useEffect(() => {
    setFilterFlats(() => flats)
  }, [flats])
  useEffect(() => {
    setFilterFlats(() => flats)
    setFilterFlats((state) =>
      state.filter(
        (element) => element.underground === formInputValues.underground
      )
    )
  }, [formInputValues.underground])

  useEffect(() => {
    setFilterFlats(() => flats)
    setFilterFlats((state) =>
      state.filter((element) => element.district === formInputValues.district)
    )
  }, [formInputValues.district])

  return (
    <section className={slider.inner}>
      <div className={slider.about}>Квартиры на сутки</div>
      <div className={slider.containerTitle}>
        <h2 className={slider.title}>Аренда квартир в Минске</h2>
        <div className={slider.containerDropDowns}>
          <DropDown
            id="undergroundSlider"
            formInputValues={formInputValues}
            setFormInputValues={setFormInputValues}
            districtList={districtList}
            style={{
              background: "white",
              boxShadow: "0px 10px 20px rgba(0, 96, 206, 0.1)",
            }}
          />
          <DropDown
            id="districtSlider"
            formInputValues={formInputValues}
            setFormInputValues={setFormInputValues}
            undergroundList={undergroundList}
            style={{
              background: "white",
              boxShadow: "0px 10px 20px rgba(0, 96, 206, 0.1)",
            }}
          />
        </div>
      </div>
      <div className={classnames(button.swiperButton, button.swiperButtonNext)}>
        <IoIosArrowForward style={{ color: "rgba(102, 78, 249, 1)" }} />
      </div>
      <div className={classnames(button.swiperButton, button.swiperButtonPrev)}>
        <IoIosArrowBack style={{ color: "rgba(102, 78, 249, 1)" }} />
      </div>
      <Swiper
        slidesPerView={3}
        loop={true}
        navigation={{
          nextEl: `.${button.swiperButtonNext}`,
          prevEl: `.${button.swiperButtonPrev}`,
        }}
        modules={[Navigation]}
        spaceBetween={30}
        style={{ paddingBottom: "78px" }}
      >
        {filterFlats.map((element) => {
          return (
            <SwiperSlide key={element.id}>
              <Card element={element} flagRemoveElement={true} />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className={slider.footer}>
        <span className={slider.amountMinsk}>{amountMinsk}</span>
        <span className={slider.amountMinskPlus}>+</span>
        <span className={slider.footerPs}>Предложений по Минску</span>
        <div className={slider.link}>
          <LinkPurple to={"/flats?city=Минск&kind=tile&_page=1"}>
            Посмотреть все
          </LinkPurple>
        </div>
      </div>
    </section>
  )
}
