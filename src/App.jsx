import { useState, useEffect } from 'react';
import './App.css';
import Pokemons from './Copmponents/Pokemons';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getData = () => {
      fetch('https://pokeapi.co/api/v2/pokemon ')
        .then((res) => res.json())
        .then(
          (data) => {
            setPokemons(data.results);
            console.log('data', data);
          },
          (error) => {
            setError(error.message);
            console.log(error);
          }
        );
    };
    getData();
  }, []);

  console.log('pokemons', pokemons);
  return (
    <div className='App'>
      <header className='App-header'>
        {error ? error : 'no errors'}
        <Pokemons pokemons={pokemons} />
      </header>
    </div>
  );
}

export default App;
