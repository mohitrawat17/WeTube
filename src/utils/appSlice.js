import { createSlice } from "@reduxjs/toolkit";


const appSlice=createSlice({
    name:"app",
    initialState:{
        isShown:true,
    },
    reducers:{
          toggleMenu:(state)=>{
             state.isShown=!state.isShown;
          }
    }
})


export const{toggleMenu}=appSlice.actions;
export default appSlice.reducer;