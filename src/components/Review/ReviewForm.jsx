import { useState } from "react"
import { useDispatch } from "react-redux";
import { addFeedback } from "../../features/movieSlice";



function ReviewForm({selectedMovieCard}) {

    const [feedback, setFeedback] = useState("");
    const dispatch = useDispatch();
    const handleFeedbackSubmit = (e)=>{
        e.preventDefault();
        dispatch(addFeedback({index:selectedMovieCard,feedback}));
        setFeedback('')
    }


  return (
    <div className='add-movie'>
    <h1>Add Review</h1>
    <form className='add-movie-form' onSubmit={handleFeedbackSubmit}>
        
        <div >
            <textarea name="review"  cols="20" rows="5" value={feedback} placeholder="Give Feedback..." onChange={(e)=>{setFeedback(e.target.value)}} required></textarea>
        </div>
        <div className="add-movie-form-btn">

            <button type='submit' onClick={handleFeedbackSubmit}>Submit</button>
        </div>
    </form>

</div>
  )
}

export default ReviewForm;
