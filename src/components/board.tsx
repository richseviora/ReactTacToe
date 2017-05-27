import * as React from 'react';
import * as Square from './square';

export interface IBoardState {

}

export interface IBoardProps {
    handleClick: (index: number) => void;
    squares: string[];
}

export class Board extends React.Component<IBoardProps, IBoardState> {

    renderSquare(i: number) {
        return <Square.Square value={this.props.squares[i]} onClick={() => this.props.handleClick(i)} />;
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