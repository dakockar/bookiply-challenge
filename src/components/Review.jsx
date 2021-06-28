import React from 'react';
import "./Review.css"

export default function Review(props) {
    const { review } = props;
    const months = ["January", "February", "March", "April", "June", "July", "August", "September", "October", "November", "December"];
    const reviewDate = new Date(review.publishedAt)
    const formattedDate = reviewDate.getDate() + " " + months[reviewDate.getMonth() - 1] + " " + reviewDate.getFullYear();

    return (
        <div className="Review">
            <div className="Review-line">
                <span className="Review-score"><b>{review.score}</b>/5</span>
                <img className="Review-channel" src={`/assets/${review.channel}.svg`} alt={review.channel} />
            </div>
            <div className="Review-line">
                <h4>{review.headline}</h4>
                <p className={review.positiveFeedback ? "" : "hidden"}>
                    <img src="/assets/thumb-up.svg" alt="thumbs up icon" /> {review.positiveFeedback}
                </p>
                <p className={review.negativeFeedback ? "" : "hidden"}>
                    <img src="/assets/thumb-down.svg" alt="thumbs down icon" /> {review.negativeFeedback}
                </p>
                <p className={review.comment ? "" : "hidden"}>
                    {review.comment}
                </p>
            </div>
            <div className="Review-line">
                <p className="Review-author">{review.author}</p>
                <p className="Review-date">Reviewed {formattedDate}</p>
            </div>
        </div>
    )
}
