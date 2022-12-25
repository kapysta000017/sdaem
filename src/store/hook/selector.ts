import { useSelector, TypedUseSelectorHook } from "react-redux"
import { RootState } from "../type"

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
