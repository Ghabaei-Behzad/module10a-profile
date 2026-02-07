// Behzad Ghabaei
// CS 81 - JavaScript
// Assignment 10b
// Instructor Seno
// 2/4/2026
// src/Profile.jsx

import React, { useState } from 'react';
import './Profile.css'; // Optional: for basic styling

/**
 * A custom profile component.
 *  {object} props - Component props.
 *  {string} props.name - The person's name.
 *  {string} props.occupation - The person's occupation.
 *  {string} props.funFact - A fun fact about the person.
 *  included are details with the click of a button.
 */
const Profile = ({ name, occupation, funFact, details }) => {
  // State to manage the visibility of the extra detail (bio/quote)
  const [showDetails, setShowDetails] = useState(false);

  // Event handler function to toggle the state.  We have seen buttons that toggle to use ! in button display.
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="profile-card">
      <h1 className="profile-name">{name}</h1>
      <p className="profile-occupation">{occupation}</p>
      <p className="profile-funfact">Fun Fact: {funFact}</p>
      

      {/* Button with an event handler. Pass to toggleDetails function and ternary operator*/}
      <button onClick={toggleDetails} className="toggle-button">
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {/* Dynamic content rendering based on state */}
      {showDetails && (
        <div className="profile-details">
          {/* Example dynamic content - you can make this a prop if you prefer  name and details are in our button toggle.*/}
          <p>
            {name} {details}
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
