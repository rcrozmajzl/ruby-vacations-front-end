import React from 'react';
import { NavLink } from 'react-router-dom';
import RubyVacationsLogo from '/home/rcrozmajzl/flatiron/P4/project/ruby-vacations-front-end/src/assets/RubyVacationsLogo.gif';

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function NavBar() {
    return (
        <div className='nav'>
            <img src={RubyVacationsLogo} className="Nav-logo" alt="logo" />
            {/* <NavLink
                to="/userprofile"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                My Profile
            </NavLink>
            <NavLink
                to="/myvisits"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                My Visits
            </NavLink>
            <NavLink
                to="/myreviews"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                My Reviews
            </NavLink>
            <NavLink
                to="/availablehouses"
                exact
                style={linkStyles}
                activeStyle={{
                    background: "darkblue",
                }}
            >
                Available Houses
            </NavLink> */}
        </div>
    )
}

export default NavBar;