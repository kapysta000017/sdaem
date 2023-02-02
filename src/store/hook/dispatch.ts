import { useDispatch } from "react-redux"
import { AppDispatch } from "../typeHook"

export const useAppDispatch = () => useDispatch<AppDispatch>()
