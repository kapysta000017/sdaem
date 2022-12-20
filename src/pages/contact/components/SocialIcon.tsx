import social from "./socialicon.module.css"

export default function SocialIcon({
  img,
  width,
}: {
  img: string
  width?: number
}) {
  return width ? (
    <a href="https://vk.com/" className={social.containerWidth}>
      <img src={img} alt="social" className={social.img} />
    </a>
  ) : (
    <div className={social.container}>
      <img src={img} alt="social" className={social.img} />
    </div>
  )
}
