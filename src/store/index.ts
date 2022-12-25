import { configureStore } from "@reduxjs/toolkit"
import sliceNews from "../pages/news/store/sliceNews"

export default configureStore({
  reducer: {
    news: sliceNews,
  },
})
