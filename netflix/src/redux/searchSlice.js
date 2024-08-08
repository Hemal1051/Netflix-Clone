import {createSlice} from '@reduxjs/toolkit';


const searchSlice = createSlice({
    name:"search",
    initialState:{
        moviename:null,
        searchedMovie:null
    },
    reducers:{
        //actions

        setSearchMoviedetails:(state,action)=>{
            const {searchMovie , movies} = action.payload;
            state.moviename = searchMovie;
            state.searchedMovie = movies;
        },
     
    }
})
export const {setSearchMoviedetails} = searchSlice.actions;
export default searchSlice.reducer;