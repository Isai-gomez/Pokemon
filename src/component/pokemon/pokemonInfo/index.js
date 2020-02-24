import React from 'react';
import Number from './Number';
import Type from './Type';
import './styles.css';

const PokemonInfo = ({ type, number }) => {
    return (
        <div className="pokemonInfoCont">
           <Type type={type}></Type> 
           <Number number={number}></Number>
        </div>
    );
};

export default PokemonInfo;