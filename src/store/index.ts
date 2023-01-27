import { configureStore } from "@reduxjs/toolkit"
import sliceNews from "../pages/news/store/sliceCards"
import sliceBread from "../pages/news/store/sliceBread"
import sliceOneNews from "../pages/newsDescription/store/sliceOneNews"
import sliceOption from "../pages/main/store/sliceOption"
import sliceHotel from "../pages/main/store/sliceMainFlats"

export default configureStore({
  reducer: {
    news: sliceNews,
    bread: sliceBread,
    oneNews: sliceOneNews,
    option: sliceOption,
    hotels: sliceHotel,
  },
})
