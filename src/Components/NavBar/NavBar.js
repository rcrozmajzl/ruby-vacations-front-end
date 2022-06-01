import React from 'react';
import { Link } from 'react-router-dom';
import RubyVacationsLogo from '../assets/RubyVacationsLogo.gif';
import './NavBar.css';

function NavBar({ onLogout }) {
    function handleLogout(){
        fetch('/logout', {
            method: 'DELETE',
        }).then(() => onLogout());
    }

    return (
        <div className='nav'>
            <img src={RubyVacationsLogo} className="Nav-logo" alt="logo" />
            <div>
                <h1><Link to="/userprofile" className='nav-links'>My Profile</Link></h1>
                <h1><Link to="/myvisits" className='nav-links'>My Visits</Link></h1>
                <h1><Link to="/myreviews" className='nav-links'>My Reviews</Link></h1>
                <h1><Link to="/availablehouses" className='nav-links'>Available Houses</Link></h1>
            </div>
            <div>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    )
}
 
export default NavBar;
