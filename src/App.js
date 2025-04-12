// Code for BMI Calculator
import "./App.css";
// ✅ Correct import
import Navbar from './Navbar';

import React, { useState } from "react";
function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  const calculate = (e) => {
    e.preventDefault();
    let bmiValue = (weight / (height * height)).toFixed(2);
    setBmi(bmiValue);
    if (bmiValue < 18.5) {
      setMessage("You are Underweight");
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setMessage("You are Normal");
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setMessage("You are Overweight");
    } else {
      setMessage("You are Obese");
    }
  };
  const reload = (e) => {
    e.preventDefault();
    window.location.reload();
  }

  return (
    <>
    <Navbar/>
    <div className="App">
      <h1>BMI Calculator</h1>
      <form onSubmit={calculate}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="text"
            name="age"
            placeholder="Enter your age"
          />
        </div>
        <div>
          <label>Weight: </label>
          <input
            type="text"
            name="weight"
            placeholder="Enter Weight Value"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height: </label>
          <input
            type="text"
            name="height:  "
            placeholder="Enter height Value"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Calculate
          </button>
          <button className="btn btn-outline" onClick={reload} type="button">
            Reload
          </button>
        </div>
        <div className="centre">
          <h3>Your BMI is:{bmi} </h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
    </>
  );
}

export default App;
