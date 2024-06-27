import { createSlice } from "@reduxjs/toolkit";
import data from '../data.json';

const initialState = {
  movies:data
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies:(state,action)=>{
      state.movies = action.payload;
    },
    addMovie: (state, action) => {
      state.movies.push(action.payload)
    },
    incRating:(state, action)=>{
      const index = action.payload;
      if(state.movies[index].star >=5){
        return;
      }
      state.movies[index].star += 0.5
    },
    decRating:(state, action)=>{
      const index = action.payload;
      if(state.movies[index].star<=0 ){
        return;
      }
      state.movies[index].star -= 0.5
    },
    togglewatch:(state,action)=>{
      state.movies[action.payload].watched = !state.movies[action.payload].watched
    },
    removeMovie:(state,action)=>{
      state.movies.splice(action.payload,1);
    },
    updateMovie:(state,action)=>{
      const {index, movie} = action.payload;
      state.movies[index] = movie;
    },
    addFeedback:(state, action)=>{
      const {index,feedback} = action.payload;
      state.movies[index].reviews.push(feedback);
    }
    
  },
});


export const movieReducer = movieSlice.reducer;

export const {addMovie, setMovies, incRating, decRating, togglewatch, removeMovie, updateMovie, addFeedback} = movieSlice.actions;

export const movieSelector = (state)=>state.movieReducer.movies;