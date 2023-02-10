import label from "./labelGold.module.css"

export default function LabelGold({ style }: { style?: React.CSSProperties }) {
  return (
    <div className={label.inner} style={style}>
      Gold
    </div>
  )
}
