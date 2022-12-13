import React from 'react';
import './index.css';
import Dice from'./Dice.js';

export default function App() {
  function allNewDice() {
      const newDice = []
      for (let i = 0; i < 10; i++) {
          newDice.push(Math.ceil(Math.random() * 6))
      }
      return newDice
  }
  return (
    <main>
    <div className="dice-container">
        <Dice value="1" />
        <Dice value="2" />
        <Dice value="3" />
        <Dice value="4" />
        <Dice value="5" />
        <Dice value="5" />
        <Dice value="6" />
        <Dice value="1" />
        <Dice value="2" />
        <Dice value="3" />
    </div>
    </main>
  );
}


