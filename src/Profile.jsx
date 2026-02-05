// src/Profile.jsx
import React, { useState } from 'react';
import './Profile.css'; // Optional: for basic styling

/**
 * A custom profile component.
 * @param {object} props - Component props.
 * @param {string} props.name - The person's name.
 * @param {string} props.occupation - The person's occupation.
 * @param {string} props.funFact - A fun fact about the person.
 */
const Profile = ({ name, occupation, funFact }) => {
  // State to manage the visibility of the extra detail (bio/quote)
  const [showDetails, setShowDetails] = useState(false);

  // Event handler function to toggle the state
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="profile-card">
      <h1 className="profile-name">{name}</h1>
      <p className="profile-occupation">{occupation}</p>
      <p className="profile-funfact">Fun Fact: {funFact}</p>

      {/* Button with an event handler */}
      <button onClick={toggleDetails} className="toggle-button">
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {/* Dynamic content rendering based on state */}
      {showDetails && (
        <div className="profile-details">
          {/* Example dynamic content - you can make this a prop if you prefer */}
          <p>
            {name} is an incredibly influential author whose works have shaped modern literature. They are known for their compelling narratives and intricate character development.
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
