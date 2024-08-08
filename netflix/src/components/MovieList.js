import React from 'react'
import MovieCart from './MovieCart'

export default function MovieList({title,movies , searchMovie=false}) {    
  return (
    <div className='px-8'>
        <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl  py-3`}>{title}</h1>
        <div className='flex overflow-x-auto no-scrollbar cursor-pointer' >
            <div className='flex items-center'>
                {

                    movies?.map((movie)=>{
                        return (
                            <MovieCart key={movie.id} posterPath={movie.poster_path} movieId={movie.id}/>
                        );
                    })
                }
                
                
            </div>
        </div>
    </div>
  )
}
