import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { useSelector } from 'react-redux'
import { movieSelector } from '../../features/movieSlice'



function MovieList({setMovieTobeUpdated, setSelectedMovieCard}) {
  const movies = useSelector(movieSelector)
  return (
    <>
       {movies.map((movie,index)=>
                <MovieCard 
                key={index} 
                movie={movie}
                index={index} 
                setMovieTobeUpdated={setMovieTobeUpdated}
                setSelectedMovieCard={setSelectedMovieCard}
                />
            )}
    </>
  )
}

export default MovieList

