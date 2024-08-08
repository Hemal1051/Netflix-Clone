import React from 'react'

import { useSelector } from 'react-redux'
import MovieList from './MovieList';

export default function MovieContainer() {

  const movie = useSelector((store)=>store.movie);

  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-30'>
        <MovieList  title={"Popular Movies"} movies={movie.popularMovie}/>
        <MovieList  title={"Now Playing Movies"} movies={movie.nowPlayingmovie}/>
        <MovieList  title={"Top-Ratted Movies"} movies={movie.topRatedMovie}/>
        <MovieList  title={"UpComming Movies"} movies={movie.upCommingMovie
}/>
      </div>

    </div>
  )
}
