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
        details=" is an incredibly influential author whose works have shaped modern literature. They are known for their compelling narratives and intricate character development."
      />
      
      <Profile
        name="Serena Williams"
        occupation="Tennis Player"
        funFact="She has won 23 Grand Slam singles titles, more than any other woman in the Open Era."
        details=" won four Olympic gold medals, three in women's doubles an all-time joint record in tennis, shared with her sister.  The duo are the only women in the Open Era to win Olympic gold in both singles and doubles."
      />

    </div>
  );
}

export default App;

