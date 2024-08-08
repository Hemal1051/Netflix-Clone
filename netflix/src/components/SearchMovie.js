import axios from 'axios';
import React, { useState } from 'react'
import { Options, SEARCH_MOVIE_URL } from '../utils/constant';
import {useDispatch, useSelector} from 'react-redux'
import { setSearchMoviedetails } from '../redux/searchSlice';
import {setLoading} from '../redux/userSlice'
import MovieList from './MovieList';

export default function SearchMovie() {

const [searchMovie,setSearchMovie] = useState("");
const dispatch=useDispatch();
const isLoading=useSelector((store)=>store.app.isLoading);
const{moviename,searchedMovie} =useSelector(store => store.SearchMovie);


const submithandler= async(e)=>{
e.preventDefault();
dispatch(setLoading(true));

try {
  const res= await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,Options);

 
  const movies=res?.data?.results;
  dispatch(setSearchMoviedetails({searchMovie , movies}));
  
} catch (error) {
  console.log(error);
}finally{
  dispatch(setLoading(false));
}
setSearchMovie("");

}

  return (
    <>
    <div className='flex  justify-center pt-[10%] w-[100%]'>
      <form className='w-[50%]' onSubmit={submithandler}>
        <div className='border-2 border-gray-200 flex justify-between shadow-md rounded-lg width-[100%] p-2'>
        <input placeholder='Search Movies' type='text' className='w-full outline-none rounded-md text-lg' value={searchMovie} onChange={(e)=>setSearchMovie(e.target.value)}/>
      <button className='bg-red-800 text-white rounded-md px-4 py-2'>{isLoading ? "Loading...." : "Search"}</button>
      </div>
      </form>
    </div>
    {
      searchedMovie ? ( <MovieList title={moviename} searchMovie={true} movies={searchedMovie}/>) : (<h1>Movie Not Found!!</h1>)
    }

    </>
    
  )
}
