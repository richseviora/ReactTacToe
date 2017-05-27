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
    squares: string[];
}

class Board extends React.Component<any, IBoardState> {
    constructor() {
        super();
        let array: string[] = Array(9);
        for (var index = 0; index < array.length; index++) {
            array[index] = null;
        }
        this.state = { squares: array }
    }
    renderSquare(i: number) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
    }

    public handleClick(i: number): void {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({ squares: squares });
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
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

class Game extends React.Component<any, any> {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
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
