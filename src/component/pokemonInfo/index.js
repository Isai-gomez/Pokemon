import React from 'react';
import Number from './Number';
import Type from './Type';
import './styles.css';

const PokemonInfo = () => {
    return (
        <div className="pokemonInfoCont">
           <Type type={"electrico"}></Type> 
           <Number number={25}></Number>
        </div>
    );
};

export default PokemonInfo;