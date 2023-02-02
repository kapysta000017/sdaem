import { RootState } from "../../../store/typeHook"
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit"
import axios from "axios"
import { New } from "./type"

const adapter = createEntityAdapter()
const initialState = adapter.getInitialState({ status: "", error: "" })

export const fetchAllNews = createAsyncThunk(
  "news/fetchAll",
  async (pageNumber: string | null, { rejectWithValue }) => {
    try {
      const news = await axios(
        `http://localhost:3001/news?_page=${pageNumber}&_limit=9`
      )
      return news.data as New[]
    } catch (error) {
      const e = error as Error
      const message = e.message
      return rejectWithValue(message)
    }
  }
)

const slice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllNews.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload)
      state.status = ""
      state.error = ""
    })
    builder.addCase(fetchAllNews.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(fetchAllNews.rejected, (state, action) => {
      state.error = action.payload as string
    })
  },
})

export default slice.reducer
export const { selectAll: selectAllNews, selectById: selectByIdNews } =
  adapter.getSelectors((state: RootState) => state.news)
