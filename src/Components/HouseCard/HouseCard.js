import React from 'react';
import { Link } from "react-router-dom";
import './HouseCard.css'


function HouseCard({ house }) {
    const {id, image, name, location, description, avg_rating, per_night} = house

    return (
        <div className='house-card'>
            <img className="houseImage" src={image} alt={name}></img>
            <h3 className="houseImage">{location}</h3>
            <p className="houseImage">{description}</p>
            <p className="houseImage">${per_night}/per night</p>
            <p className="houseImage">Stars: {avg_rating} </p>
            <Link to={`/availablehouses/${id}`}>
                <button className="houseButton">Show Details</button>
            </Link>
        </div>
    )
}

export default HouseCard;