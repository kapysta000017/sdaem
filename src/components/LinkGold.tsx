import { Link } from "react-router-dom"
import linkStyle from "./linkGold.module.css"
import { ReactComponent as ArrowSvg } from "./../assets/images/main/arrow.svg"
import { ReactNode } from "react"
import classnames from "classnames"

const LinkComponent: React.FC<{
  to: string
  children: ReactNode
  style?: React.CSSProperties
  flagDisabledLink: boolean
}> = ({ to, style, children, flagDisabledLink }) => {
  return (
    <Link
      to={to}
      className={classnames(
        linkStyle.inner,
        !flagDisabledLink && linkStyle.innerDisabled
      )}
      style={style}
    >
      {children}
      <ArrowSvg className={linkStyle.arrow} />
    </Link>
  )
}
export default LinkComponent
