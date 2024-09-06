import React, { useState } from 'react';
import axios from 'axios';

const CharacterCard = ({ character, onCharacterUpdate }) => {
  const [damage, setDamage] = useState(0);

  const handleDamageChange = (event) => {
    setDamage(event.target.value);
  };

  const handleApplyDamage = () => {
    axios.post(`http://localhost:5000/api/character/damage/${character.name}/${damage}`)
      .then(response => {
        onCharacterUpdate(response.data);
        setDamage(0);
      })
      .catch(error => {
        console.error('There was an error applying the damage!', error);
        setDamage(0);
      });
  };

  const handleLevelUp = () => {
    axios.post(`http://localhost:5000/api/character/lvlup/${character.name}`)
      .then(response => {
        onCharacterUpdate(response.data);
      })
      .catch(error => {
        console.error('There was an error leveling up', error);
      });
  };


  return (
    <div className="card">
      <h2>{character.name}</h2>
      <p>Player: {character.player}</p>
      <p>MaxHp: {character.maxHp}</p>
      <p>HP: {character.hp}</p>
      <p>Class: {character.class}</p>
      <p>LvL: {character.lvl}</p>
      <p>Race: {character.race}</p>
      <p>Alignment: {character.alignment}</p>
      <p>BonusInfo: {character.bonusinfo}</p>

      <input
        type="number"
        value={damage}
        onChange={handleDamageChange}
        placeholder="Damage"
      />
      <button onClick={handleApplyDamage}>Apply Damage</button>
      <button onClick={handleLevelUp}>LevelUp</button>
    </div>
  );
};

export default CharacterCard;

