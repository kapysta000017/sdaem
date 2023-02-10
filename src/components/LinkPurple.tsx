import { Link } from "react-router-dom"
import { ReactNode } from "react"
import linkStyle from "./linkPurple.module.css"
import { ReactComponent as ArrowSvg } from "./../assets/images/flats/arrow.svg"

const LinkPurple: React.FC<{
  to: string
  children: ReactNode
  style?: React.CSSProperties
}> = ({ to, children, style }) => {
  return (
    <Link to={to} className={linkStyle.inner} style={style}>
      {children}
      <ArrowSvg className={linkStyle.arrow} />
    </Link>
  )
}
export default LinkPurple
