import * as React from 'react';
import * as Square from './square';
import * as Board from './board';

interface IGameTurnState {
    squares: string[];
}

interface IGameState {
    xIsNext: boolean;
    history: IGameTurnState[];
    stepNumber: number;
}

export class Game extends React.Component<any, IGameState> {
    constructor() {
        super();
        this.state = {
            xIsNext: true,
            history: [
                { squares: Array<string>(9) }
            ],
            stepNumber: 0
        };
    }

    public calculateWinner(squares: string[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    private jumpToStep(moveNumber: number): void {
        this.setState({
            stepNumber: moveNumber,
            xIsNext: (moveNumber % 2) ? false : true,
        })
    }

    private handleClick(index: number): void {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[index]) {
            return;
        }
        squares[index] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    public renderMoves(): JSX.Element[] {
        return this.state.history.map((step, move) => {
            const desc = move ?
                'Move #' + move :
                'Game start';
            return (
                <li key={move}>
                    <a href="#" onClick={() => this.jumpToStep(move)}>{desc}</a>
                </li>
            );
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board.Board squares={current.squares} handleClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{this.renderMoves()}</ol>
                </div>
            </div>
        );
    }
}