import React, { useState } from 'react';
import axios from 'axios';
import './CharacterCreation.css';

const CharacterCreation = () => {
  const [character, setCharacter] = useState({
    name: '',
    player: '',
    hp: 0,
    maxHp: 0,
    characterclass: '',
    lvl: 1,
    race: '',
    alignment: '',
    spellslots: [0],
    bonusInfo: [''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSpellslotsChange = (index, value) => {
    const newSpellslots = [...character.spellslots];
    newSpellslots[index] = value;
    setCharacter((prev) => ({
      ...prev,
      spellslots: newSpellslots,
    }));
  };

  const handleBonusInfoChange = (index, value) => {
    const newBonusInfo = [...character.bonusInfo];
    newBonusInfo[index] = value;
    setCharacter((prev) => ({
      ...prev,
      bonusInfo: newBonusInfo,
    }));
  };

  const handleAddSpellslot = () => {
    setCharacter((prev) => ({
      ...prev,
      spellslots: [...prev.spellslots, 0],
    }));
  };

  const handleAddBonusInfo = () => {
    setCharacter((prev) => ({
      ...prev,
      bonusInfo: [...prev.bonusInfo, ''],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/character/create', character)
      .then(response => {
        alert('Character created successfully!');
        setCharacter({
          name: '',
          player: '',
          hp: 0,
          maxHp: 0,
          characterclass: '',
          lvl: 1,
          race: '',
          alignment: '',
          spellslots: [0],
          bonusInfo: [''],
        });
      })
      .catch(error => {
        console.error('There was an error creating the character!', error);
      });
  };

  return (
    <div className="character-creation">
      <h2>Create a New Character</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={character.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Player:</label>
          <input type="text" name="player" value={character.player} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>HP:</label>
          <input type="number" name="hp" value={character.hp} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Max HP:</label>
          <input type="number" name="maxHp" value={character.maxHp} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Class:</label>
          <input type="text" name="characterclass" value={character.characterclass} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Level:</label>
          <input type="number" name="lvl" value={character.lvl} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Race:</label>
          <input type="text" name="race" value={character.race} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Alignment:</label>
          <input type="text" name="alignment" value={character.alignment} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Spellslots:</label>
          {character.spellslots.map((slot, index) => (
            <div key={index}>
              <input 
                type="number" 
                value={slot} 
                onChange={(e) => handleSpellslotsChange(index, e.target.value)} 
              />
            </div>
          ))}
          <button type="button" onClick={handleAddSpellslot}>Add Spellslot</button>
        </div>
        <div className="form-group">
          <label>Bonus Info:</label>
          {character.bonusInfo.map((info, index) => (
            <div key={index}>
              <input 
                type="text" 
                value={info} 
                onChange={(e) => handleBonusInfoChange(index, e.target.value)} 
              />
            </div>
          ))}
          <button type="button" onClick={handleAddBonusInfo}>Add Bonus Info</button>
        </div>
        <button type="submit">Create Character</button>
      </form>
    </div>
  );
};

export default CharacterCreation;

