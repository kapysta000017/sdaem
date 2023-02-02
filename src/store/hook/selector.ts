import { useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "../typeHook"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
