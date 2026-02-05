/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/
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

