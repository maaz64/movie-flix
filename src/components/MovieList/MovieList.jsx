import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { useSelector } from 'react-redux'
import { movieSelector } from '../../features/movieSlice'



function MovieList({setMovieTobeUpdated}) {
  const movies = useSelector(movieSelector)
  return (
    <>
       {movies.map((movie,index)=>
                <MovieCard 
                key={index} 
                movie={movie}
                index={index} 
                setMovieTobeUpdated={setMovieTobeUpdated}
                />
            )}
    </>
  )
}

export default MovieList

