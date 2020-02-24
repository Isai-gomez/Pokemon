import React from 'react';

const Number = (props) => {
    return (
        <div>
            <label>Número:<strong> {props.number}</strong></label>
        </div>
    );
};

export default Number;