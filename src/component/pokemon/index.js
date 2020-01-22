import React, { Component } from 'react';
import PokemonInfo from '../pokemonInfo';
import Name from './Name';
import pokemon from '../../img/pokemon.jpg'
import './styles.css'

const obPokemon = {
    name:'Pikachu',
    type:'Elecctrico',
    number:25
}

class Pokemon extends Component{     
    render(){
        const { type, number } = obPokemon;
        return(
            <div className="pokemonCont">
                <Name name={obPokemon.name}></Name>
                <div className="image-info">  
                <img src = {pokemon} height="100" width="100"/>
                <PokemonInfo type={type} number={number}></PokemonInfo>           
                </div>

            </div>
        )
    }
}

export default Pokemon;
