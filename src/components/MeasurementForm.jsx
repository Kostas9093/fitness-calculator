// src/components/MeasurementForm.js
import React, { useState, useEffect } from 'react';

const MeasurementForm = ({ onCalculate }) => {
  const [measurements, setMeasurements] = useState({
    oldWeight: '',
    oldFat: '',
    oldMuscle: '',
    oldWater: '',
    newWeight: '',
    newFat: '',
    newMuscle: '',
    newWater: ''
  });

  useEffect(() => {
    const savedMeasurements = JSON.parse(localStorage.getItem('oldMeasurements'));
    if (savedMeasurements) {
      setMeasurements((prevMeasurements) => ({
        ...prevMeasurements,
        ...savedMeasurements
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements({
      ...measurements,
      [name]: value
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { oldWeight, oldFat, oldMuscle, oldWater, ...newMeasurements } = measurements;
    const oldMeasurements = { oldWeight, oldFat, oldMuscle, oldWater };
    localStorage.setItem('oldMeasurements', JSON.stringify(oldMeasurements));
    onCalculate(measurements);
  };

  return (
    <form id="old" onSubmit={handleSubmit}>
      <h2>Enter Your Previous Measurements</h2>
      <label>
        Previous Weight (kg):
        <input type="number" placeholder="Enter Your Previous Weight in kg" name="oldWeight" value={measurements.oldWeight} onChange={handleChange} required />
      </label>
      <label>
      Previous Fat Mass (%):
        <input type="number" placeholder="Enter Your Previous Fat Mass in %"  name="oldFat" value={measurements.oldFat} onChange={handleChange} required />
      </label>
      <label>
      Previous Muscle Mass (%):
        <input type="number" placeholder="Enter Your Previous Muscle Mass in %"  name="oldMuscle" value={measurements.oldMuscle} onChange={handleChange} required />
      </label>
      <label>
      Previous Water (%):
        <input type="number" placeholder="Enter Your Previous Water in %" name="oldWater" value={measurements.oldWater} onChange={handleChange} required />
      </label>

      <h2>Enter Your New Measurements</h2>
      <label>
        Current Weight (kg):
        <input type="number" placeholder="Enter Your Current Weight in kg"  name="newWeight" value={measurements.newWeight} onChange={handleChange} required />
      </label>
      <label>
      Current Fat Mass (%):
        <input type="number" name="newFat" placeholder="Enter Your Current Fat Mass in %" value={measurements.newFat} onChange={handleChange} required />
      </label>
      <label>
      Current Muscle Mass (%):
        <input type="number" name="newMuscle" placeholder="Enter Your Current Muscle Mass %"  value={measurements.newMuscle} onChange={handleChange} required />
      </label>
      <label>
      Current Water (%):
        <input type="number" name="newWater" placeholder="Enter Your Current Water in %"  value={measurements.newWater} onChange={handleChange} required />
      </label>

      <button type="submit">Calculate Progress</button>
    </form>
  );
};

export default MeasurementForm;
