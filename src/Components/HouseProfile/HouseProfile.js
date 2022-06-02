import React, {useEffect, useState} from 'react';
import { useParams, Link } from 'react-router-dom'
import DateRangePicker from '@wojtekmaj/react-daterange-picker'

function HouseProfile({ user }) {
    const [house, setHouse] = useState({})
    const { id } = useParams()
    const [value, onChange] = useState([new Date(), new Date()]);
    const {image, name, location, description, avg_rating, reviews} = house
    
    useEffect(() => {
        fetch(`/houses/${id}`)
        .then(r => r.json())
        .then(data => setHouse(data))
    },[id])

    let finish = value[1].toString().split(' ')
    let begining = value[0].toString().split(' ')
    switch(finish[1]){
        case 'Jan':
            finish[1] = '01'
            break;
        case 'Feb':
            finish[1] = '02'
            break;
        case 'Mar':
            finish[1] = '03'
            break;
        case 'Apr':
            finish[1] = '04'
            break;
        case 'May':
            finish[1] = '05'
            break;
        case 'Jun':
            finish[1] = '06'
            break;
        case 'Jul':
            finish[1] = '07'
            break;
        case 'Aug':
            finish[1] = '08'
            break;
        case 'Sep':
            finish[1] = '09'
            break;
        case 'Oct':
            finish[1] = '10'
            break;
        case 'Nov':
            finish[1] = '11'
            break;
        default:
            finish[1] = '12'
            break;
    }
    switch(begining[1]){
        case 'Jan':
            begining[1] = '01'
            break;
        case 'Feb':
            begining[1] = '02'
            break;
        case 'Mar':
            begining[1] = '03'
            break;
        case 'Apr':
            begining[1] = '04'
            break;
        case 'May':
            begining[1] = '05'
            break;
        case 'Jun':
            begining[1] = '06'
            break;
        case 'Jul':
            begining[1] = '07'
            break;
        case 'Aug':
            begining[1] = '08'
            break;
        case 'Sep':
            begining[1] = '09'
            break;
        case 'Oct':
            begining[1] = '10'
            break;
        case 'Nov':
            begining[1] = '11'
            break;
        default:
            begining[1] = '12'
            break;
    }
    
    let start = begining[3] + '-' + begining[1] + '-' + begining[2] 
    let end = finish[3] + '-' + finish[1] + '-' + finish[2] 
    const handleBooking = () => {
        fetch('/visits',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                start_date: start,
                end_date: end,
                house_id: id,
                user_id: user.id
            })
        })
        .then(r => r.json())
        .then(data => console.log(data))
    }

    return(
        <div>
            <h1>{name}</h1>
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
                    {reviews ? reviews.slice(-3).map(rev => {
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
                    format='y-MM-dd'
                />
            <Link to={`/myvisits`}>
                <button onClick={handleBooking}>Book Now!</button>
            </Link>
            </div>
        </div>
    )
}

export default HouseProfile;