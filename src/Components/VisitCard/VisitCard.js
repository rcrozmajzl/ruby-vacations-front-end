import React from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import './VisitCard.css'

function VisitCard({ visit, houses }) {
    const {start_date, end_date, house_id, user_id} = visit
    const houseVisit = houses.filter(house => house.id === house_id)

    return (
        <div>
            <img className='visitsImage'src={houseVisit[0].image} alt={houseVisit[0].id}></img>
            <h1>{houseVisit[0].location}</h1>
            <h3>From: {start_date}</h3>
            <h3>To: {end_date}</h3>
            <ReviewForm house_id={houseVisit[0].id} user_id={user_id} />
        </div>
    )
}

export default VisitCard;