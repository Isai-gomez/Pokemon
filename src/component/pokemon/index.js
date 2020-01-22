import React, { Component } from 'react';
import PokemonInfo from '../pokemonInfo';
import Name from './Name';
import pokemon from '../../img/pokemon.jpg'
import './styles.css'

class Pokemon extends Component{
    render(){
        return(
            <div className="pokemonCont">
                <Name name={"Pikachu"}></Name>
                <div className="image-info">  
                <img src = {pokemon} height="100" width="100"/>
                <PokemonInfo></PokemonInfo>           
                </div>

            </div>
        )
    }
}

export default Pokemon;
