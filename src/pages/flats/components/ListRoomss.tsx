import { useSearchParams } from "react-router-dom"
import { useAppSelector } from "../../../store/hook/selector"
import list from "./listRooms.module.css"

export default function ListRooms() {
  const roomsList = useAppSelector((state) => state.flats.roomsList)
  const districtList = useAppSelector((state) => state.flats.districtList)
  const { status } = useAppSelector((state) => state.flats)

  const [searchParams, setSearchParams] = useSearchParams()

  const onChangeUrlParamsRooms = (element: string) => {
    searchParams.set("rooms", element)
    setSearchParams(searchParams)
  }

  const onChangeUrlParamsDistrict = (element: string) => {
    searchParams.set("district", element)
    setSearchParams(searchParams)
  }

  if (status) {
    return <div className={list.listRooms}>loading...</div>
  }

  return (
    <ul className={list.listRooms}>
      {roomsList.map((element) => (
        <li
          key={Math.random()}
          className={list.room}
          onClick={() => {
            onChangeUrlParamsRooms(element)
          }}
        >
          {element} - комнатные
        </li>
      ))}
      {districtList.map((element) => (
        <li
          key={Math.random()}
          className={list.room}
          onClick={() => {
            onChangeUrlParamsDistrict(element)
          }}
        >
          {element}
        </li>
      ))}
    </ul>
  )
}
