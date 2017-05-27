import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

interface ISquareProps {
    value: string;
    onClick: () => void;
}

class Square extends React.Component<ISquareProps, any> {
    constructor() {
        super();
        this.state = { value: null };
    }
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}

interface IBoardState {

}

interface IBoardProps {
    handleClick: (index: number) => void;
    squares: string[];
}

class Board extends React.Component<IBoardProps, IBoardState> {

    renderSquare(i: number) {
        return <Square value={this.props.squares[i]} onClick={() => this.props.handleClick(i)} />;
    }

    render() {

        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

interface IGameTurnState {
    squares: string[];
}

interface IGameState {
    xIsNext: boolean;
    history: IGameTurnState[];
}

class Game extends React.Component<any, IGameState> {
    constructor() {
        super();
        this.state = {
            xIsNext: true,
            history: [
                { squares: Array<string>(9) }
            ]
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

    public handleClick(index: number): void {
        const history = this.state.history;
        const current = this.state.history[history.length - 1];
        const squares = current.squares.slice();
        if (this.calculateWinner(squares) || squares[index]) {
            return;
        }
        squares[index] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !this.state.xIsNext,
        });
    }

    public renderMoves(): JSX.Element[] {
        return this.state.history.map((step, move) => {
            const desc = move ?
                'Move #' + move :
                'Game start';
            return (
                <li>
                    <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            );
        });
    }

    public jumpTo(moveIndex: number): void {

    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
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
                    <Board squares={current.squares} handleClick={(i) => this.handleClick(i)} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{this.renderMoves()}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('example')
);
``