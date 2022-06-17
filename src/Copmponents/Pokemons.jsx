import Pokemon from './Pokemon';

function Pokemons({ pokemons }) {
  return (
    <>
      <h2>POKEMONS</h2>
      {pokemons
        ? pokemons.map((pok, i) => (
            <Pokemon key={i} name={pok.name} url={pok.url} />
          ))
        : null}
    </>
  );
}
export default Pokemons;
