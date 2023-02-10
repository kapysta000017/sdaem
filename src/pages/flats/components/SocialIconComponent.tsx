import imgComponent from "./socialIconComponent.module.css"

export default function SocialIconComponent({
  Img,
  href,
}: {
  Img: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  href: string
}) {
  return (
    <a href={href} className={imgComponent.container}>
      <Img className={imgComponent.img} />
    </a>
  )
}
