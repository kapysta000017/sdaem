import work from "./workPath.module.css"
import ToggleOnMap from "../../../flats/components/ToggleOnMap"
import points from "./../../../../assets/images/main/pointsWhite.svg"
import Card from "./Card"
import customers from "./../../../../assets/images/main/card/customers.svg"
import blockchema from "./../../../../assets/images/main/card/blockchema.svg"
import AddAd from "../../../../components/AddAd"
import CardGold from "./CardGold"

export default function WorkPath() {
  const textCustomers = (
    <div>
      Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в
      котором возможно{" "}
      <span style={{ fontFamily: "Semi Bold" }}>
        бесплатно создавать и публиковать
      </span>{" "}
      объявления на сайте.
    </div>
  )
  const textBlockchema = (
    <div>
      Вы в любое время можете{" "}
      <span style={{ fontFamily: "Semi Bold" }}>поднимать</span> объявления{" "}
      <span style={{ fontFamily: "Semi Bold" }}>вверх первой страницы</span>{" "}
      каталога, они разместятся сразу после платных объявлений до тех пор, пока
      другой пользователь не повторит процедуру.
    </div>
  )

  return (
    <section className={work.inner}>
      <img src={points} alt="points" className={work.points} />
      <h4 className={work.title}>Поиск квартир на карте</h4>
      <div className={work.about}>
        Ищите квартиры на сутки в центре города, возле парка или в живописном
        районе
      </div>
      <div style={{ marginTop: "23px" }}>
        <ToggleOnMap fill="rgba(255, 213, 79, 1)" classname={work.mapHover} />
      </div>
      <div className={work.containerCards}>
        <Card
          img={customers}
          titleText="Начните привлекать клиентов бесплатно!"
          text={textCustomers}
        >
          <AddAd
            to="/add"
            className={work.add}
            value={"+ Разместить объявление"}
          />
        </Card>
        <Card
          img={blockchema}
          titleText="Поднимайте объявления"
          text={textBlockchema}
        >
          <AddAd
            to="/price"
            className={work.price}
            value={"Узнать стоимость услуги"}
          />
        </Card>
        <CardGold />
      </div>
    </section>
  )
}
