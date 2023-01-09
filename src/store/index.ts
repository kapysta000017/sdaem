import { configureStore } from "@reduxjs/toolkit"
import sliceNews from "../pages/news/store/sliceNews"
import sliceBread from "../pages/news/store/sliceBread"

export default configureStore({
  reducer: {
    news: sliceNews,
    bread: sliceBread,
  },
})
