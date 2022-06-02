import React from 'react';
import { Link } from "react-router-dom";
import './HouseCard.css'

function HouseCard({ house }) {
    const {id, image, name, location, description, avg_rating, per_night} = house

    return (
        <div className='house-card'>
            <img src={image} alt={name}/>
            <h3>{location}</h3>
            <p>{description}</p>
            <p>${per_night}/per night</p>
            <p>Stars: {avg_rating} </p>
            <Link to={`/availablehouses/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    )
}

export default HouseCard;