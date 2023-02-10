import info from "./info.module.css"
import flat from "./../../../../assets/images/main/footer/flat.jpg"
import pointsGold from "./../../../../assets/images/main/footer/pointsGold.svg"

export default function Info() {
  return (
    <section style={{ position: "relative" }}>
      <img src={pointsGold} alt="points" className={info.svgPoints} />
      <div className={info.about}>ЧТО ТАКОЕ SDAEM.BY</div>
      <h4 className={info.title}>Квартира на сутки в Минске</h4>
      <img src={flat} alt="flat" className={info.img} />
      <div className={info.text}>
        <p style={{ marginBottom: "28px" }}>
          <span style={{ fontFamily: "Semi Bold" }}>
            Нужна квартира на сутки в Минске?
          </span>{" "}
          На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог
          насчитывает{" "}
          <span style={{ fontFamily: "Semi Bold" }}>более 500 квартир.</span>{" "}
          Благодаря удобной навигации вы быстро найдете подходящий вариант.
        </p>{" "}
        <p style={{ marginBottom: "30px" }}>
          В каталоге представлены комфортабельные однокомнатные квартиры на
          сутки и квартиры с большим количеством комнат в разных районах города,
          с различной степенью удобства от дешевых до VIP с джакузи.
        </p>
        <p>
          Чтобы снять квартиру на сутки в Минске, вам достаточно определиться с
          выбором и связаться с владельцем для уточнения условий аренды и
          заключить договор. Заметим, на сайте представлены исключительно
          квартиры на сутки без посредников, что избавляет посетителей от
          необходимости взаимодействовать с агентствами, тратя свое время и
          деньги. Также пользователи сайта могут совершенно бесплатно размещать
          объявления о готовности сдать квартиру на сутки.
        </p>
      </div>
    </section>
  )
}
