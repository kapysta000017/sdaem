import heart from "./likeHeartSpan.module.css"
import { ReactComponent as HeartSvg } from "./../../../../../assets/images/flats/card/heart.svg"
import { Flat } from "../../../../../store/type"
import { useAppDispatch } from "../../../../../store/hook/dispatch"
import { fetchUpdateFlat } from "../../../../../store/sliceMainFlats"

export default function LikeHeartSpan({ element }: { element: Flat }) {
  const dispatch = useAppDispatch()
  return (
    <button
      className={heart.container}
      onClick={() => {
        const flat = { ...element, like: !element.like }
        dispatch(fetchUpdateFlat(flat))
      }}
    >
      <span className={heart.span}>
        {element.like ? "Добавлено" : "В закладки"}
      </span>
      <HeartSvg
        fill={element.like ? "#EB5757" : "none"}
        className={heart.img}
      />
    </button>
  )
}
