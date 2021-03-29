import React from 'react';
import './Board.scss';
import Tile from '../tile/Tile';

const Board = ({tiles, onClick}) => {
    

    return (
    <div className="grid">
        {
            tiles.map((tile, i) => (
                <Tile key={i} value={tile} onClick={() => { onClick(i) }}  />
    ))
        }
    </div>
    )
}

export default Board;