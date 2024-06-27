import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, movieSelector, updateMovie } from '../../features/movieSlice';

function AddMovieForm({ movieToBeUpdated }) {

    const dispatch = useDispatch();
    const movies = useSelector(movieSelector);

    useEffect(() => {
        if (movieToBeUpdated != null) {
            setFormData(movies[movieToBeUpdated]);
        }
    }, [])


    const [formData, setFormData] = useState({
        title: "",
        genre: "",
        poster: "",
        release_year: "",
        desc: "",
        star: 0,
        watched: false
    });

    const clear = () => {
        setFormData({
            title: "",
            genre: "",
            poster: "",
            release_year: "",
            desc: "",
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (movieToBeUpdated != null) {
            dispatch(updateMovie({ movie: formData, index: movieToBeUpdated }));
        } else {
            dispatch(addMovie(formData));
        }

        clear();
    }
    return (
        <div className='add-movie'>
            <h1>Add Movies</h1>
            <form className='add-movie-form' onSubmit={handleSubmit}>
                <div className="movie-title">
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder='Movie Title' required />
                </div>
                <div className="genre">
                    <input type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder='Genre' required />
                </div>
                <div className="poster">
                    <input type="text" name="poster" value={formData.poster} onChange={handleChange} placeholder='Poster URL' required />
                </div>
                <div className="rel_year">
                    <input type="text" name="release_year" value={formData.release_year} onChange={handleChange} placeholder='Release Year' required />
                </div>
                <div className=" desc">
                    <textarea name="desc" value={formData.desc} onChange={handleChange} placeholder="Description" cols="20" rows="5" required>Description</textarea>
                </div>
                <div className="add-movie-form-btn">

                    <button type='submit' onClick={handleSubmit}>Add Movie</button>
                </div>
            </form>

        </div>
    )
}

export default AddMovieForm
