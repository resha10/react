import React from 'react';
import './UserProfile.css';

const UserProfile = ({ UserId, name, gender, dob, address, photo }) => {
  return (

    <div className="user-card">
      <img src={photo} alt={name} className="user-photo" />
      <h3>{name}</h3>
      <p><strong>User ID:</strong> {UserId}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>DOB:</strong> {dob}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>

  );
};

export default UserProfile;