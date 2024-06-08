// src/components/ProgressDisplay.js
import React from 'react';

const ProgressDisplay = ({ progress }) => {
  if (!progress) return null;

  const {
    weightDiff,
    fatDiff,
    muscleDiff,
    waterDiff,
    oldFatKilos,
    newFatKilos,
    oldMuscleKilos,
    newMuscleKilos
  } = progress;

  const fatKilosDiff = (newFatKilos - oldFatKilos).toFixed(2);
  const muscleKilosDiff = (newMuscleKilos - oldMuscleKilos).toFixed(2);

  return (
    <div className="new">
      <h2>Progress Results</h2>
      <p>Your weight has Change by: {weightDiff} kg<br/><br/> Your fat Mass Change by: {fatDiff} % <br/><br/>Your muscle Mass Change by: {muscleDiff} %<br/><br/>Your Water has Change by: {waterDiff} %<br/><br/></p>
      <h3>Your fat Mass in Kilograms</h3>
      <p>Previous fat Mass: {oldFatKilos} kg<br/><br/>Current fat Mass: {newFatKilos} kg</p>
      <h4>Your progress in fat kilograms:
       {muscleKilosDiff > 0 ? ` You gained ${fatKilosDiff} kg of fat mass` : ` You lost ${Math.abs(fatKilosDiff)} kg of fat mass`}</h4>
      <h3>Muscle mass in Kilograms</h3>
      <p>Previous muscle Mass: {oldMuscleKilos} kg<br/><br/>Current muscle Mass: {newMuscleKilos} kg</p>
      <h4>Your progress in muscle kilograms:
       {muscleKilosDiff > 0 ? ` You gained ${muscleKilosDiff} kg of muscles mass` : ` You lost ${Math.abs(muscleKilosDiff)} kg of muscles mass`}
      </h4>
    </div>
  );
};

export default ProgressDisplay;
