import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ReviewList from './components/ReviewList';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-heading">
          <p>ID: 091021</p>
          <h1>La Casa de las Flores</h1>
        </div>
      </div>
      <div className="chevron"></div>
      <ReviewList />
    </div>
  );
}

export default App;
