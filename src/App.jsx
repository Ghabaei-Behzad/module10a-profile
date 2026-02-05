// Behzad Ghabaei
// CS 81 - JavaScript
// Assignment 10B - App.jsx
// Instructor Seno
// Feb 4 2026
// src/App.jsx (or App.js)

import React from 'react';
import Profile from './Profile';
import './App.css'; // Optional: for basic app styling

function App() {
  return (
    <div className="App">
      <h1>Custom Profile Components</h1>
      
      {/* Rendering the component and passing props */}
      <Profile
        name="J.K. Rowling"
        occupation="Author"
        funFact="She originally published the first Harry Potter book under the name Joanne Rowling."
      />
      
      <Profile
        name="Serena Williams"
        occupation="Athlete (Tennis Player)"
        funFact="She has won 23 Grand Slam singles titles, more than any other woman in the Open Era."
      />

    </div>
  );
}

export default App;

