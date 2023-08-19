import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        videos:[]
    },
    reducers:{
        addVideos:(state,action)=>{
            state.videos=[...action.payload];
        }
    }
});

export const{addVideos}=searchSlice.actions;
export default searchSlice.reducer;