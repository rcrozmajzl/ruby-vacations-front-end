import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

function HouseProfile() {
    const [house, setHouse] = useState({})
    const { id } = useParams()
    const [value, onChange] = useState([new Date(), new Date()]);
    console.log('Date: ', Date);

    const {image, name, location, description, avg_rating, reviews} = house

    useEffect(() => {
        fetch(`/houses/${id}`)
        .then(r => r.json())
        .then(data => setHouse(data))
    },[id])


    return(
        <div>
            <div className='picAndStars'>
                <img src={image} alt={name}></img>
                <p>Rating: {avg_rating} </p>
            </div>
            <div className='details'>
                <h1>{location}</h1>
                <p>{description}</p>
            </div>
            <div className='Reviews'>
                    <h1>Reviews</h1>
                    {reviews ? reviews.slice(0,3).map(rev => {
                        return(
                            <h3>Stars: {rev.rating} {rev.content}</h3>
                        ) 
                    }) : null }
            </div> 
            <div className='bookVisit'>
                <h1>Book Visit</h1>
                <DateRangePicker
                    calendarAriaLabel="Toggle calendar"
                    clearAriaLabel="Clear value"
                    dayAriaLabel="Day"
                    monthAriaLabel="Month"
                    nativeInputAriaLabel="Date"
                    onChange={onChange}
                    value={value}
                    yearAriaLabel="Year"
                />
            <Link to={`/myvisits`}>
                <button>Book Now!</button>
            </Link>
            </div>
        </div>
    )
}

export default HouseProfile;