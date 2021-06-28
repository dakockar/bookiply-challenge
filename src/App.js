import React from 'react';
import './App.css';
import ReviewList from './components/ReviewList';

function App() {
  return (
    <div className="App">
      <div className="App-heading">
        <p>ID: 091021</p>
        <h1>Le Casa De Las Flores</h1>
      </div>
      <ReviewList />
    </div>
  );
}

export default App;
