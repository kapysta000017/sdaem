import {
  createSlice,
  createEntityAdapter,
  createAsyncThunk,
} from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "./typeHook"
import { Flat } from "./type"

const adapter = createEntityAdapter()
const initialState = adapter.getInitialState({
  status: "",
  error: "",
  citiesList: [] as Array<string>,
  roomsList: [] as Array<string>,
  districtList: [] as Array<string>,
  sleepList: [] as Array<string>,
  undergroundList: [] as Array<string>,
  citiesListFooterHeader: [] as Array<string>,
})

export const fetchAllFlats = createAsyncThunk(
  "mainPage/fetchAllFlats",
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
    builder.addCase(fetchAllFlats.fulfilled, (state, action) => {
      adapter.setAll(state, action.payload)
      action.payload.forEach((hotel: Flat) => {
        state.citiesList.push(hotel.city)
        state.citiesList = state.citiesList.filter(
          (element, index) => state.citiesList.indexOf(element) === index
        )

        state.citiesListFooterHeader.push(hotel.city)
        state.citiesListFooterHeader = state.citiesListFooterHeader.filter(
          (element, index) =>
            state.citiesListFooterHeader.indexOf(element) === index
        )

        state.roomsList.push(hotel.rooms)
        state.roomsList = state.roomsList.filter(
          (element, index) => state.roomsList.indexOf(element) === index
        )
        state.roomsList.sort((a, b) => (Number(a) > Number(b) ? 1 : -1))

        state.districtList.push(hotel.district)
        state.districtList = state.districtList.filter(
          (element, index) => state.districtList.indexOf(element) === index
        )

        state.sleepList.push(hotel.sleep)
        state.sleepList = state.sleepList.filter(
          (element, index) => state.sleepList.indexOf(element) === index
        )
        state.sleepList.sort((a, b) => (Number(a) > Number(b) ? 1 : -1))

        state.undergroundList.push(hotel.underground)
        state.undergroundList = state.undergroundList.filter(
          (element, index) => state.undergroundList.indexOf(element) === index
        )
      })
      state.status = ""
      state.error = ""
    })
    builder.addCase(fetchAllFlats.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(fetchAllFlats.rejected, (state, action) => {
      state.error = action.payload as string
    })
  },
})
export default slice.reducer
export const { selectAll: selectAllFlats } = adapter.getSelectors(
  (state: RootState) => state.flats
)
export const { removeCitiesRoomsList } = slice.actions
