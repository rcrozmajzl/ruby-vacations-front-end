import React from 'react';
import HouseCard from '../HouseCard/HouseCard.js';

function AvailableHouses({ filterHouses, selectedState, setSelectedState }) {

    const renderHouses = filterHouses.map(house => <HouseCard house={house} key={house.id} />)
    
    return (
        <div>
            <h2>Available Houses</h2>
            <label>
            Select State:
            <select name='state' onChange={(e) =>{ setSelectedState(e.target.value) }} value={selectedState} >
            <option value='All'>All</option>
                <option value='Alaska'>Alaska</option>
                <option value='California'>California</option>
                <option value='Colorado'>Colorado</option>
                <option value='Florida'>Florida</option>
                <option value='Illinios'>Illinios</option>
                <option value='Montana'>Montana</option>
                <option value='New York'>New York</option>
                <option value='Texas'>Texas</option>
                <option value='Utah'>Utah</option>
                <option value='Washington'>Washington</option>
            </select>
            </label>
            {renderHouses}
        </div>
    )
}

export default AvailableHouses;