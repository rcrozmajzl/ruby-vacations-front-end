import React, {useState, useEffect} from 'react';
import VisitCard from '../VisitCard/VisitCard.js'

function MyVisits({ user, houses }) {
    const [visits, setVisits] = useState([])
    console.log('visits: ', visits);

    useEffect(() => {
        fetch('/visits')
        .then(r => r.json())
        .then(data => setVisits(data.filter(visit => visit.user_id === user.id)))
    },[user.id])
    
    const renderVisits = visits.map(visit => <VisitCard visit={visit} key={visit.id} houses={houses} user={user} />)

    return(
        <div>
            {renderVisits}
        </div>
    )
}

export default MyVisits;