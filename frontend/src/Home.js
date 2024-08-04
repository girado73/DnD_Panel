import React from 'react';
import CharacterCard from './components/CharacterCard';
import './App.css';
import EnemiesTable from './components/EnemieTable.js'

const Home = ({ characters, handleCharacterUpdate }) => {
  return (
    <div>
      <div className="card-container">
        {characters.map(character => (
          <CharacterCard 
            key={character.name} 
            character={character} 
            onCharacterUpdate={handleCharacterUpdate} 
          />
        ))}
      </div>
      <table>
        <tr>
          <th>DiffClass</th>
          <th>Roll</th>
        </tr>
        <tr>
          <td>1</td>
          <td>0 - 5</td>
        </tr>
        <tr>
          <td>2</td>
          <td>6 - 10</td>
        </tr>
        <tr>
          <td>3</td>
          <td>10 - 15</td>
        </tr>
        <tr>
          <td>4</td>
          <td>16 - 20</td>
        </tr>
        <tr>
          <td>5</td>
          <td>21 - 25</td>
        </tr>
      </table>
      <table>
        <tr>
          <th>Armor Class</th>
          <th>Hit Points</th>
          <th>Str</th>
          <th>Dex</th>
          <th>Con</th>
          <th>Int</th>
          <th>Wis</th>
          <th>Cha</th>
          <th>Attack 1</th>
          <th>Attack 2</th>
        </tr>
        <tr>
          <td>12</td>
          <td>11</td>
          <td>+0</td>
          <td>+1</td>
          <td>+1</td>
          <td>+0</td>
          <td>+0</td>
          <td>+0</td>
          <td>Melee: (1d6 +1)+3</td>
          <td>Ranged: (1d8 +1)+3</td>
        </tr>

      </table>
    </div>
  );
};

export default Home;

