import { Link } from "react-router-dom"

export default function AddAd({
  to,
  className,
  value,
}: {
  to: string
  className: string
  value: string
}) {
  return (
    <Link to={to} className={className}>
      {value}
    </Link>
  )
}
