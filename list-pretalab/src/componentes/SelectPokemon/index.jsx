import  React, { useEffect, useState } from 'react';
import './SelectPokemon.css';
import Axios from 'axios';

const SelectPokemon = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [selectPokemon, setSelectPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
        try{
            const response = await Axios.get('https://pokeapi.co/api/v2/pokemon');
            setPokemons(response.data.results);
        } catch(error) {
            console.log('Erro ao buscar os Pokemons', error);
        }
    };
    fetchPokemons();
  }, [])


const fetchPokemonDetails = async (pokemonName) => {
    try{
        const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setSelectPokemon(response.data.sprites.front_default);
        props.aoSelecionarPokemon(response.data.sprites.front_default);
    } catch(error) {
        console.log('Erro ao buscar os Pokemons', error)
    }
}

return(
    <div className='select-pokemon'>
        <label>{props.label}</label>
        <select onChange={(event) => fetchPokemonDetails(event.target.value)} required={props.required}>
            <option value="">Selecione...</option>
            {pokemons.map((pokemon, index) => (
                <option key={index} value={pokemon.name}>{pokemon.name}</option>
            ))} 
        </select>
    </div>
)

}
export default SelectPokemon;