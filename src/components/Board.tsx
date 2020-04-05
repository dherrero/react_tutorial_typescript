import React from 'react';
import Square from './Square';

interface Props {
    values: Array<string>,
    onClick: (i: number) => void
}

const Board = ({ values, onClick }: Props) => {

    const renderSquare = (i: number) => {
        return <Square value={values[i]} onClick={() => onClick(i)} />;
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );

}
export default Board;