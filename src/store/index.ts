import { configureStore } from "@reduxjs/toolkit"
import sliceNews from "../pages/news/store/sliceCards"
import sliceBread from "../components/stores/sliceBread"
import sliceOneNews from "../pages/newsDescription/store/sliceOneNews"
import sliceOption from "../components/stores/sliceOption"
import sliceFlats from "./sliceMainFlats"

export default configureStore({
  reducer: {
    news: sliceNews,
    bread: sliceBread,
    oneNews: sliceOneNews,
    option: sliceOption,
    flats: sliceFlats,
  },
})
