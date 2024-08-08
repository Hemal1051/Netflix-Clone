import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingmovie:null,
        popularMovie:null,
        topRatedMovie:null,
        upCommingMovie:null,
        trailerMovie:null,
        toggle:false,
        open:false,
        id:""
    },
    reducers:{
        //actions
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingmovie = action.payload;
        },
        getPopularMovie:(state,action)=>{
            state.popularMovie = action.payload;
        },
        getTopRatedMovies:(state,action)=>{
            state.topRatedMovie = action.payload;
        },
        getUpCommingMovies:(state,action)=>{
            state.upCommingMovie = action.payload;
        },
        setToggle:(state)=>{
            state.toggle=!state.toggle;
        },
        getTrailerMovie:(state,action)=>{
            state.trailerMovie = action.payload;
        },
        setOpen:(state,action)=>{
            state.open = action.payload;
        },
        getId:(state,action)=>{
            state.id = action.payload;
        },
    }
});

export const {getNowPlayingMovies , getPopularMovie , getTopRatedMovies , getUpCommingMovies , setToggle , getTrailerMovie ,setOpen , getId} = movieSlice.actions;
export default movieSlice.reducer;