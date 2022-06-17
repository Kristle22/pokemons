import { useState, useEffect } from 'react';
import './App.css';
import Pokemons from './Copmponents/Pokemons';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch('https://pokeapi.co/api/v2/pokemon ')
        .then((res) => res.json())
        .then((data) => {
          setPokemons(data.results);
          console.log('data', data);
        });
    };
    getData();
  }, []);

  console.log('pokemons', pokemons);
  return (
    <div className='App'>
      <header className='App-header'>
        <Pokemons pokemons={pokemons} />
      </header>
    </div>
  );
}

export default App;
