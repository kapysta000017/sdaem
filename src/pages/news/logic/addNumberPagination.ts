export default function onAddNumberPagination(
  valuePagination: number | string,
  pagination: (string | number)[],
  setPagination: React.Dispatch<React.SetStateAction<(string | number)[]>>
) {
  const amount = pagination.length
  if (pagination[amount - 2] === valuePagination) {
    setPagination((state) => [...state, (valuePagination as number) + 2])
  }
  if (pagination[amount - 1] === valuePagination) {
    setPagination((state) => [...state, (valuePagination as number) + 1])
  }
}
