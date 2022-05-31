import React from 'react';
import { Link } from "react-router-dom";


function HouseCard({ house }) {
    const {id, image, name, location, description, avg_rating} = house

    return (
        <div>
            <img src={image} alt={name}></img>
            <h1>{name}</h1>
            <h3>{location}</h3>
            <p>{description}</p>
            <p>Stars: {avg_rating} </p>
            <Link to={`/availablehouses/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    )
}

export default HouseCard;