import React from 'react';
import GenericAvatar from '/home/rcrozmajzl/flatiron/P4/project/ruby-vacations-front-end/src/assets/GenericAvatar.png';

function UserProfile() {

    return (
        <div>
            <img src={GenericAvatar} className="Avatar" alt="avatar" />
            <h1>First Name Last Name</h1>
            <p>A little background information on myself</p>
        </div>
    )
}

export default UserProfile;