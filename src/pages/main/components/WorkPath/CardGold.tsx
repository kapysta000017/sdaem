import bg from "./../../../../assets/images/main/card/bgstars.svg"
import gold from "./cardGold.module.css"
import AddAd from "../../../../components/AddAd"

export default function CardGold() {
  return (
    <div className={gold.inner}>
      <div className={gold.headline}>Приоритет Gold</div>
      <p className={gold.text}>
        Приоритетное размещение <span style={{ fontFamily: "Bold" }}>Gold</span>{" "}
        <span style={{ fontFamily: "Bold" }}>
          позволяет закрепить ваше объявление
        </span>{" "}
        в верхней части каталога!
      </p>
      <p className={gold.text}>
        Gold объявления{" "}
        <span style={{ fontFamily: "Bold" }}>перемещаются каждые 5 мин</span> на
        1 позицию, что делает размещение одинаковым для всех.
      </p>
      <img src={bg} alt="back" className={gold.img} />
      <AddAd
        to="/infoPrice"
        className={gold.priceInfo}
        value={"Еще о тарифе Gold"}
      />
    </div>
  )
}
