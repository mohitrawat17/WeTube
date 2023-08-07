import { createSlice } from "@reduxjs/toolkit";


const appSlice=createSlice({
    name:"app",
    initialState:{
        isShown:true,
    },
    reducers:{
          toggleMenu:(state)=>{
             state.isShown=!state.isShown;
          },
          closeMenu:(state)=>{
                state.isShown=false;
          },
          openMenu:(state)=>{
            state.isShown=true;
          }
    }
})


export const{toggleMenu, closeMenu, openMenu}=appSlice.actions;
export default appSlice.reducer;