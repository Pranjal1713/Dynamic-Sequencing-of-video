import {configureStore} from  "@reduxjs/toolkit"
import videoSlice from "./slice/VideoSlice/VideoSlice"

const store = configureStore({
    reducer: {
        videos: videoSlice,
    }
})

export default store