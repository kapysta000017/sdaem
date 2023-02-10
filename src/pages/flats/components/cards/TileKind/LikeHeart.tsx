import heart from "./likeHeart.module.css"
import { ReactComponent as HeartSvg } from "./../../../../../assets/images/flats/card/heart.svg"
import { Flat } from "../../../../../store/type"
import { useAppDispatch } from "../../../../../store/hook/dispatch"
import { fetchUpdateFlat } from "../../../../../store/sliceMainFlats"

export default function LikeHeart({ element }: { element: Flat }) {
  const dispath = useAppDispatch()

  return (
    <div
      className={heart.container}
      onClick={() => {
        const flat = { ...element, like: !element.like }
        dispath(fetchUpdateFlat(flat))
      }}
    >
      <HeartSvg
        fill={element.like ? "#EB5757" : "none"}
        className={heart.svg}
      />
    </div>
  )
}
