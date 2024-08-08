import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import axios from 'axios';
import { Now_Playing_Movie, Options, Up_Comming_Movie } from '../utils/constant';
import { getNowPlayingMovies } from '../redux/MovieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { usePopularmovies } from '../hooks/usePopularMovies';
import { useTopRatedmovies } from '../hooks/useTopRatedMovies';
import { useUpcommingmovies } from '../hooks/useUpcommingMovies';
import SearchMovie from './SearchMovie';

export default function Browse() {

  const user = useSelector((store) => store.app.user);
  const toggle=useSelector((store)=>store.movie.toggle);
  const navigate = useNavigate();
const dispatch=useDispatch();
//coustom Hook
useNowPlayingMovies();
usePopularmovies();
useTopRatedmovies();
useUpcommingmovies();

useEffect(()=>{
  if (!user) {
    navigate("/");
  }
 },[]);

  return (
    <>
      <div>
        <Header />
        <div>
          {toggle ? <SearchMovie/> : (
            <>
              <MainContainer/>
              <MovieContainer/>
            </>
          )}
        
        </div>
      </div>



    </>
  )
}
