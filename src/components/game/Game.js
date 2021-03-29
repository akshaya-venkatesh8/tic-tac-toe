import React ,{useState}from 'react';
import './Game.scss';
import Board from '../board/Board';
import findWinner from '../../services/findWinner';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = findWinner(board);

    const handleClick = (i) => {
        const boardCopy = [...board]
        if (winner || boardCopy[i]) return; 

        boardCopy[i] = xIsNext ? 'x' : 'o';
        setBoard(boardCopy);
        setXisNext(!xIsNext)
    }
    const reset = () => {
        setBoard(board.fill(null));
    }
    const jumpTo = () => {

    }

    const renderMoves = () => (
         <button className="reset-btn" onClick={() => setBoard(Array(9).fill(null))}>
        Reset
        </button>
    )
    return <div className="game">
        <div className="title">TIC TAC TOE</div>
        <Board tiles={board} onClick={handleClick}/>

        <div className="winner">
            <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')} </p>
            {renderMoves()}
        </div>
        </div>
}

export default Game;