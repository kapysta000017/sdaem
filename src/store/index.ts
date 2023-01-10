import { configureStore } from "@reduxjs/toolkit"
import sliceNews from "../pages/news/store/sliceCards"
import sliceBread from "../pages/news/store/sliceBread"
import sliceOneNews from "../pages/newsDescription/store/sliceOneNews"

export default configureStore({
  reducer: {
    news: sliceNews,
    bread: sliceBread,
    oneNews: sliceOneNews,
  },
})
