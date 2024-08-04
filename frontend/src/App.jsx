import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import CharacterCreation from './Creation.js'
import HamburgerMenu from './components/HamburgerMenu';
import './App.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/characterlist')
      .then(response => {
        setCharacters(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleCharacterUpdate = (updatedCharacter) => {
    setCharacters(prevCharacters => 
      prevCharacters.map(char => 
        char.name === updatedCharacter.name ? updatedCharacter : char
      )
    );
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading characters: {error.message}</p>;
  }

  return (
    <Router>
      <div className="App">
        <HamburgerMenu />
        <Routes>
           <Route 
            path="/" 
            element={<Home characters={characters} handleCharacterUpdate={handleCharacterUpdate} />} 
          />
          <Route
            path="/create" 
            element={<CharacterCreation/>} 
          /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;

