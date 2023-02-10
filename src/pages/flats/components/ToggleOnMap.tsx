import kindMap from "./toggleOnMap.module.css"
import { ReactComponent as MapSvg } from "./../../../assets/images/flats/map.svg"
import { Link } from "react-router-dom"
import classnames from "classnames"

export default function ToggleOnMap({
  fill,
  classname,
}: {
  fill: string
  classname?: string
}) {
  return (
    <div>
      <Link to="/map" className={classnames(kindMap.toggleOnMap, classname)}>
        <MapSvg className={kindMap.svg} fill={fill} />
        Показать на карте
      </Link>
    </div>
  )
}
