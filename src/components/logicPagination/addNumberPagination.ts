import { IPagination } from "../typePagination/arrayNumber"

export default function onAddNumberPagination(
  valuePagination: IPagination,
  pagination: Array<IPagination>,
  setPagination: React.Dispatch<React.SetStateAction<Array<IPagination>>>
) {
  const amount = pagination.length
  if (pagination[amount - 2] === valuePagination) {
    setPagination((state) => [...state, (valuePagination as number) + 2])
  }
  if (pagination[amount - 1] === valuePagination) {
    setPagination((state) => [...state, (valuePagination as number) + 1])
  }
}
