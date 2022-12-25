import { RootState } from "../../../store/type"
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import axios from "axios"
import { New } from "./type"

const adapter = createEntityAdapter()
const initialState = adapter.getInitialState()

export const fetchAllNews = createAsyncThunk("news/fetchAll", async () => {
  const news = await axios("https://6264063ba6adc673188c6c37.mockapi.io/news")
  return news.data as New[]
})

const slice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllNews.fulfilled, (state, action) => {
      adapter.upsertMany(state, action.payload)
    })
  },
})

export default slice.reducer
export const { selectAll: selectAllNews } = adapter.getSelectors(
  (state: RootState) => state.news
)
