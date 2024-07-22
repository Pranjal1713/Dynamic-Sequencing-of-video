import { createSlice } from "@reduxjs/toolkit";
// import { data } from "../../../components/VideoPlayer/VideoPlayer";


const initialState = {
    video: [],
}

const videoSlice = createSlice({
    name: 'videos',
    initialState,
    reducers: {
        setVideo: (state, action) => {
            state.video.push(action.payload)
        }
            
    }
    
})

export const {setVideo} = videoSlice.actions 
export default videoSlice.reducer