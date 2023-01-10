import social from "./socialicon.module.css"

export default function SocialIcon({
  img,
  style,
  link,
}: {
  img: string
  style: React.CSSProperties
  link?: boolean
}) {
  return link ? (
    <a href="https://vk.com/" style={style} className={social.container}>
      <img src={img} alt="social" />
    </a>
  ) : (
    <div className={social.container} style={style}>
      <img src={img} alt="social" />
    </div>
  )
}
