import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { StoreOption } from "../../store/type"
import axios from "axios"

const initialState: StoreOption = {
  options: [],
  status: "",
  error: null,
}

export const fetchOneOption = createAsyncThunk(
  "option/fetchOneOption",
  async (category: string | null, { rejectWithValue }) => {
    try {
      const option = await axios(
        `http://localhost:3001/options?category=${category}`
      )
      return option.data[0].moreOption
    } catch (error) {
      const e = error as Error
      const message = e.message
      return rejectWithValue(message)
    }
  }
)

const slice = createSlice({
  name: "option",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOneOption.fulfilled, (state, action) => {
      state.options = action.payload
      state.status = ""
      state.error = null
    })
    builder.addCase(fetchOneOption.rejected, (state, action) => {
      state.error = action.payload as string
    })
    builder.addCase(fetchOneOption.pending, (state) => {
      state.status = "loading"
    })
  },
})

export default slice.reducer
