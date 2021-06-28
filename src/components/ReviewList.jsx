import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setReviewList, filterByScore, filterByChannel } from '../app/reviewListSlice';
import axios from 'axios';
import Review from './Review';
import "./ReviewList.css";


function ReviewList() {
    const filteredReviewList = useSelector((state) => state.reviewList.filteredReviewList);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get("https://interview-task-api.bookiply.io/reviews")
            .then((response) => {
                dispatch(setReviewList(response.data))
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const handleFilterByScore = e => {
        dispatch(filterByScore(e.target.value));
    }

    const handleFilterByChannel = e => {
        dispatch(filterByChannel(e.target.value));
    }

    return (
        <div className="ReviewList">
            <form>
                <label htmlFor="minScore">Filter By Score:</label>
                <select name="minScore" id="minScore" onChange={handleFilterByScore}>
                    <option value="all">All</option>
                    <option value="5">5</option>
                    <option value="4.5">4.5 & up</option>
                    <option value="4">4 & up</option>
                    <option value="3">3 & up</option>
                    <option value="2">2 & up</option>
                </select>
                <label htmlFor="channel">Filter By Channel:</label>
                <select name="channel" id="channel" onChange={handleFilterByChannel}>
                    <option value="all">All</option>
                    <option value="holidu">Holidu</option>
                    <option value="airbnb">Airbnb</option>
                    <option value="bookingcom">Booking.com</option>
                </select>
            </form>
            <h2>{filteredReviewList.length} Reviews</h2>
            {
                filteredReviewList.map((review, i) => {
                    return <Review review={review} key={i} />
                })
            }
        </div>
    );

}

export default ReviewList;