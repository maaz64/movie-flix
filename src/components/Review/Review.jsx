import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { movieSelector } from '../../features/movieSlice'
import "./review.css";
import { useNavigate } from 'react-router-dom';

function Review({ selectedMovieCard }) {

    const movies = useSelector(movieSelector);
    const movie = movies[selectedMovieCard];
    const reviews = movie.reviews;
    const navigate = useNavigate('/');
    return (
        <>

        <div className='review-page'>

            <div className="main-img">
                <img src={movie.poster} alt="img" />
            </div>
            <div className="detail">
                <div className="title">
                    {movie.title}
                </div>
                <div className="release_year">
                    {movie.release_year}
                </div>
                <div className="desc">
                    {movie.desc}
                </div>
                
            </div>

        <div className="review-list">
        <div className="title">
                Reviews
            </div>
            {reviews.map((review,index)=>
            <div key={index} className="single-rev">
            <p style={{textAlign:"center"}}>{review}</p></div>)}
            
        </div>
            
        </div>
        </>
        
    )
}

export default Review
