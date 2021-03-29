import React from 'react';
import './Tile.scss';
import X from '../x/X'
import O from '../o/O'
const Tile = ({value, onClick}) => (

    <button className="tile" onClick={onClick}>
        {value === 'x' ? <X /> : (value === 'o' ? <O /> : null ) }
    </button>
)

export default Tile;