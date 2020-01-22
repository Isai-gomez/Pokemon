import React from 'react';
import Number from './Number';
import Type from './Type';

const PokemonInfo = () => {
    return (
        <div>
           <Type type={"electrico"}></Type> 
           <Number number={25}></Number>
        </div>
    );
};

export default PokemonInfo;