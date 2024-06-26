import { useDispatch } from "react-redux";
import { decRating, incRating, removeMovie, togglewatch } from "../../features/movieSlice";
import { useNavigate } from "react-router-dom";


function MovieCard({movie,index, setMovieTobeUpdated}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleEdit = ()=>{
      setMovieTobeUpdated(index);
      navigate('/add-movie');
    }

  return (
    <>
      <div className="main">
          <div className="movie-card">
            <div className="left">
              <img
                src={movie.poster}
                alt="poster"
              />
            </div>
            <div className="right">
              <div className="title">{movie.title}</div>
              <div className="plot">{movie.desc.slice(0,195)}</div>
              <div className="release_year">{movie.release_year}</div>
              <div className="footer">
                <div className="rating">{movie.rating}</div>
                <div className="star-dis">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                    alt="decrease"
                    className="str-btn"
                    onClick={()=>dispatch(decRating(index))}
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    alt="stars"
                    className="stars"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
                    alt="increase"
                    className="str-btn"
                    onClick={()=>dispatch(incRating(index))}
                  />
                  <span className="starCount">{movie.star}</span>
                </div>
                <button onClick={()=>dispatch(togglewatch(index))} className={movie.watched?"unfavourite-btn":"favourite-btn"}>{movie.watched?"Watched":"Un-Watched"}</button>

                <button className="edit-btn" onClick={handleEdit}>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/3597/3597075.png"
                    alt="edit-btn"
                  />
                </button>
                <button className="remove-btn" onClick={()=>{dispatch(removeMovie(index))}}>
                <img
                    src="https://cdn-icons-png.flaticon.com/128/6460/6460112.png"
                    alt="del-btn"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default MovieCard



