import social from "./socialIcon.module.css"

export default function SocialIcon({
  to,
  style,
  svg,
}: {
  to: string
  style: React.CSSProperties
  svg: string
}) {
  return (
    <div className={social.imgContainer} style={style}>
      <a href={to} className={social.img}>
        <img src={svg} alt="social" />
      </a>
    </div>
  )
}
