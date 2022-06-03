import React from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import './VisitCard.css';

function VisitCard({ visit, houses }) {
    const {start_date, end_date, house_id, user_id} = visit
    const houseVisit = houses.filter(house => house.id === house_id)

    return (
        <div className='visit-outer-div'>
            <div className='visit-card'>
                <div className='visit-information-container'>
                    <div className='visit-info-div'>
                        <h1 className='visit-title'>{houseVisit[0].location}</h1>
                        <div className='visit-more-information'>
                            <div className='dates-container'>
                                <div className='test-container'>
                                    <h2 className='dates-text'>{start_date} - {end_date} </h2>
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }

export default VisitCard;