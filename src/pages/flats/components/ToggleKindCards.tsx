import { ReactNode } from "react"
import toggle from "./toggleKindCards.module.css"
import { useSearchParams } from "react-router-dom"
import { ReactComponent as TileSvg } from "./../../../assets/images/flats/tile.svg"
import { ReactComponent as ListSvg } from "./../../../assets/images/flats/list.svg"
import classnames from "classnames"

export default function ToggleKindCards({
  children,
  kind,
}: {
  children: ReactNode
  kind: string
}) {
  const [searchParams, setSearchParams] = useSearchParams()
  const kindParams = searchParams.get("kind")

  return (
    <div>
      <button
        className={classnames(
          toggle.dropbtn,
          kind === "tile" && kindParams === "tile" && toggle.dropbtnActive,
          kind === "list" && kindParams === "list" && toggle.dropbtnActive
        )}
        onClick={() => {
          searchParams.set("kind", kind)
          setSearchParams(searchParams)
        }}
      >
        {kind === "tile" && (
          <TileSvg
            className={classnames(
              toggle.svg,
              kindParams === "tile" && toggle.svgActive
            )}
          />
        )}
        {kind === "list" && (
          <ListSvg
            className={classnames(
              toggle.svg,
              kindParams === "list" && toggle.svgActive
            )}
          />
        )}
        {children}
      </button>
    </div>
  )
}
