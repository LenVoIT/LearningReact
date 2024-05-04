import React from 'react';

const Cell = (props) => {
    const {value, onClick, className} = props; // <=> const value = props.value ; const onClick = props.onClick;
    console.log(value, onClick);
    return (
        <div className={`game-cell ${className}`} onClick={props.onClick}>
            {props.value}
        </div>
    );
};

export default Cell;