import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { New } from "./type"
import { StoreNew } from "./type"

export const fetchOneNews = createAsyncThunk(
  "oneNews/fetchOneNews",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const news = await axios(`http://localhost:3001/news/${id}`)
      return news.data as New
    } catch (error) {
      const e = error as Error
      const message = e.message
      return rejectWithValue(message)
    }
  }
)

const initialState = {
  oneNews: {},
  status: "",
  error: null,
} as StoreNew

const slice = createSlice({
  name: "oneNews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOneNews.fulfilled, (state, action) => {
      state.oneNews = action.payload
      state.status = ""
      state.error = null
    })
    builder.addCase(fetchOneNews.rejected, (state, action) => {
      state.error = action.payload as string
    })
    builder.addCase(fetchOneNews.pending, (state) => {
      state.status = "loading"
    })
  },
})

export default slice.reducer
