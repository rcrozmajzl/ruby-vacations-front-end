import React from 'react';
import GenericAvatar from '../assets/GenericAvatar.png'
import './UserProfile.css'

function UserProfile() {

    return (
        <div>
            <img src={GenericAvatar} className="Avatar" alt="avatar" />
            <h1 className="Avatar">First Name Last Name</h1>
            <p className="Avatar">A little background information on myself</p>
        </div>
    )
}

export default UserProfile;