import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import RubyVacationsLogo from '../assets/RubyVacationsLogo.gif';
import './NavBar.css';

function NavBar({ setUser, setIsAuthenticated }) {
    const history = useHistory()
    function handleLogout(){
        fetch('/logout', {
            method: 'DELETE',
        }).then(() => {
            setIsAuthenticated(false)
            setUser(null)
            history.push('/')
        });
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
            <div className="navLogoutDiv">
                <button  className="navLogout"  onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    )
}
 
export default NavBar;
