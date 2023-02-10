import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { StoreBread } from "../../pages/news/store/type"

const initialState: StoreBread = {
  bread: [{ name: "Новости", link: "/news" }],
  status: "",
  error: null,
}

export const fetchOneNewsBread = createAsyncThunk(
  "bread/fetchOneNews",
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      const news = await axios(`http://localhost:3001/news/${id}`)
      return { name: news.data.title as string, link: `/news/${id}` }
    } catch (error) {
      const e = error as Error
      const message = e.message
      return rejectWithValue(message)
    }
  }
)

const slice = createSlice({
  name: "bread",
  initialState,
  reducers: {
    updateBread(state, acton) {
      state.bread.length = 1
      state.bread[0] = acton.payload
      state.status = ""
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOneNewsBread.fulfilled, (state, action) => {
      state.bread[1] = action.payload!
      state.status = ""
      state.error = null
    })
    builder.addCase(fetchOneNewsBread.rejected, (state, action) => {
      state.error = action.payload as string
    })
    builder.addCase(fetchOneNewsBread.pending, (state) => {
      state.status = "loading"
    })
  },
})

export const { updateBread } = slice.actions
export default slice.reducer
