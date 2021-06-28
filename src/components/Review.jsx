import React from 'react';
import "./Review.css"
import thumbsUp from "../assets/thumb-up.svg";
import thumbsDown from "../assets/thumb-down.svg";

export default function Review(props) {
    const { review } = props;
    const months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
    const reviewDate = new Date(review.publishedAt)
    const formattedDate = reviewDate.getDate() + " " + months[reviewDate.getMonth() - 1] + " " + reviewDate.getFullYear();


    return (
        <div className="Review">
            <div>
                <span className="Review-score">{review.score}/5</span>
                <span>{review.channel}</span>
            </div>
            <div>
                <h2>
                    {review.headline}
                </h2>
                <p className={review.positiveFeedback ? "" : "hidden"}>
                    <img src={thumbsUp} alt="thumbs up icon" /> {review.positiveFeedback}
                </p>
                <p className={review.negativeFeedback ? "" : "hidden"}>
                    <img src={thumbsDown} alt="thumbs down icon" /> {review.negativeFeedback}
                </p>
                <p>
                    {review.comment}
                </p>
            </div>
            <div>
                <p>{review.author}</p>
                <p>Reviewed {formattedDate}</p>
            </div>
        </div>
    )
}
