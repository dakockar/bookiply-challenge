import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setReviewList, setMinScoreFilter, setChannelFilter, filterReviewList } from '../app/reviewListSlice';
import "./ReviewList.css";
import Review from './Review';
import { Form } from 'react-bootstrap';


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

    const handleFilter = e => {
        switch (e.target.name) {
            case "minScore": dispatch(setMinScoreFilter(e.target.value));
                break;
            case "channel": dispatch(setChannelFilter(e.target.value));
                break;
            default: return;
        }

        dispatch(filterReviewList());
    }

    return (
        <div className="ReviewList">
            <div className="ReviewList-header">
                <h2>{filteredReviewList.length} Reviews</h2>
                <Form className="ReviewList-Form">
                    <Form.Group>
                        <Form.Label htmlFor="minScore">Filter By Score</Form.Label>
                        <Form.Control as="select" name="minScore" id="minScore" onChange={handleFilter}>
                            <option value="0">All</option>
                            <option value="5">5</option>
                            <option value="4.5">4.5 & up</option>
                            <option value="4">4 & up</option>
                            <option value="3">3 & up</option>
                            <option value="2">2 & up</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="channel">Filter By Channel</Form.Label>
                        <Form.Control as="select" name="channel" id="channel" onChange={handleFilter}>
                            <option value="">All</option>
                            <option value="holidu">Holidu</option>
                            <option value="airbnb">Airbnb</option>
                            <option value="bookingcom">Booking.com</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
            {
                filteredReviewList.map((review, i) => {
                    return <Review review={review} key={i} />
                })
            }
        </div>
    );
}

export default ReviewList;