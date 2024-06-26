import { useState } from 'react'
import NavBar from './components/NavBar/NavBar';
import MovieList from './components/MovieList/MovieList';
import './App.css'
import AddMovieForm from './components/AddMovieForm';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [movieToBeUpdated, setMovieTobeUpdated] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MovieList setMovieTobeUpdated={setMovieTobeUpdated}/>} />
          <Route path="/add-movie" element={<AddMovieForm movieToBeUpdated={movieToBeUpdated} setMovieTobeUpdated={setMovieTobeUpdated} />} />
          <Route path="*" element={<><h1 className='bg-red-400 text-center'>Error 404: Page Not Found</h1></>} />
        </Route>
      </Routes>
    </>
  )
}

export default App;






