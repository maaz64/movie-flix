import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import MovieList from './components/MovieList/MovieList';
import AddMovieForm from './components/MovieForm/AddMovieForm';
import { Route, Routes } from 'react-router-dom';
import ReviewForm from './components/Review/ReviewForm';
import Review from './components/Review/Review';
function App() {

  const [movieToBeUpdated, setMovieTobeUpdated] = useState(null);
  const [selectedMovieCard, setSelectedMovieCard] = useState(null);


  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MovieList setMovieTobeUpdated={setMovieTobeUpdated} setSelectedMovieCard={setSelectedMovieCard}/>} />
          <Route path="/add-movie" element={<AddMovieForm movieToBeUpdated={movieToBeUpdated} setMovieTobeUpdated={setMovieTobeUpdated} />} />
          <Route path='/review-form' element={selectedMovieCard!=null && <ReviewForm selectedMovieCard={selectedMovieCard} />}/>
          <Route path='/reviews' element={selectedMovieCard!=null && <Review selectedMovieCard={selectedMovieCard}/>}/>
          <Route path="*" element={<><h1>Error 404: Page Not Found</h1></>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;






