import React from 'react';

const Number = (props) => {
    return (
        <div>
            <label>Numero:<strong> {props.number}</strong></label>
        </div>
    );
};

export default Number;