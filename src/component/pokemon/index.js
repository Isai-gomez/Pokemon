import React, { Component } from 'react';
import PokemonInfo from '../pokemonInfo';
import Name from './Name';
import pokemon from '../../img/pokemon.jpg'

class Pokemon extends Component{
    render(){
        return(
            <div className="pokemoscont">
                <Name name={"Pikachu"}></Name>  
                <img src = {pokemon} height="50"/>
                <PokemonInfo></PokemonInfo>           


            </div>
        )
    }
}

export default Pokemon;
