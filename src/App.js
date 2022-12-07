import React from 'react';
import './index.css';
import Dice from'./Dice.js';

export default function App() {
  return (
    <main>
    <div className="dice-container">
        <Dice name="1" />
        <Dice name="2" />
        <Dice name="3" />
        <Dice name="4" />
        <Dice name="5" />
        <Dice name="5" />
        <Dice name="6" />
        <Dice name="1" />
        <Dice name="2" />
        <Dice name="3" />
    </div>
    </main>
  );
}


