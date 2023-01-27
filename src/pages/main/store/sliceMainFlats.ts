import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../../../store/type"
import { Hotel } from "./type"

const adapter = createEntityAdapter()
const initialState = adapter.getInitialState({
  status: "",
  error: "",
  citiesList: [] as Array<string>,
  roomsList: [] as Array<string>,
  citiesListFooter: [] as Array<string>,
})

export const fetchAllHotel = createAsyncThunk(
  "mainPage/fetchAllHotel",
  async (_, { rejectWithValue }) => {
    try {
      const hotels = await axios("http://localhost:3001/hotel")
      return hotels.data
    } catch (error) {
      const e = error as Error
      const message = e.message
      return rejectWithValue(message)
    }
  }
)

const slice = createSlice({
  name: "mainPage",
  initialState,
  reducers: {
    removeCitiesRoomsList(state, action) {
      state.roomsList.length = 0
      state.citiesList.length = 0
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllHotel.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload)
      action.payload.forEach((hotel: Hotel) => {
        state.citiesList.push(hotel.city)
        state.citiesList = state.citiesList.filter(
          (element, index) => state.citiesList.indexOf(element) === index
        )

        state.citiesListFooter.push(hotel.city)
        state.citiesListFooter = state.citiesListFooter.filter(
          (element, index) => state.citiesListFooter.indexOf(element) === index
        )

        state.roomsList.push(hotel.rooms)
        state.roomsList = state.roomsList.filter(
          (element, index) => state.roomsList.indexOf(element) === index
        )
        state.roomsList.sort((a, b) => (Number(a) > Number(b) ? 1 : -1))
      })
      state.status = ""
      state.error = ""
    })
    builder.addCase(fetchAllHotel.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(fetchAllHotel.rejected, (state, action) => {
      state.error = action.payload as string
    })
  },
})
export default slice.reducer
export const { selectAll: selectAllHotel } = adapter.getSelectors(
  (state: RootState) => state.hotels
)
export const { removeCitiesRoomsList } = slice.actions
