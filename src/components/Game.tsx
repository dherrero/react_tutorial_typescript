import React, { useState } from 'react'
import Board from './Board'
import Clock from './Clock'
import { calculateWinner } from './utils/logic';

interface movement {
    values: Array<string>,
    nextValue: string
}
const defaultValues: Array<string> = new Array(9).fill('');
const initialMove: Array<movement> = [];

const Game = () => {
    const [scope, setScope] = useState({ values: defaultValues, nextValue: 'X', history: initialMove });
    const winner: string = calculateWinner(scope.values);
    let status: string;

    const handleClick = (i: number) => {
        let values: Array<string> = scope.values.slice();
        let nextValue: string = scope.nextValue
        let history: Array<movement> = scope.history;

        if (winner || values[i]) {
            return;
        }

        history.push({ values: scope.values.slice(), nextValue: scope.nextValue });
        values[i] = nextValue;
        nextValue = nextValue === 'X' ? 'O' : 'X';
        setScope({ values, nextValue, history });
    }

    const goHistory = (m: number) => {
        setScope({ values: scope.history[m].values.slice(), nextValue: scope.history[m].nextValue, history: scope.history.slice(0, m) });
    }

    if (winner)
        status = `Winner: ${winner}`
    else if (scope.history.length === 9)
        status = 'Game Over'
    else
        status = `Next player: ${scope.nextValue}`

    return (
        <div className="game">
            <div className="game-board">
                <Board values={scope.values} onClick={(i: number) => handleClick(i)} />
                <Clock />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>
                    {
                        scope.history.map((step: movement, move: number) => {
                            const desc = move ? 'Go to step #' + move + ' player\'s ' + step.nextValue + ' turn' : 'Go to Start';
                            return <li key={move}>
                                <button onClick={() => goHistory(move)}>{desc}</button>
                            </li>;
                        })
                    }
                </ol>

            </div>
        </div>
    );

};
export default Game;