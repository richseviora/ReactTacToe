import * as React from 'react';
import * as Square from './square';

export type IBoardState = string[];

export interface IBoardProps {
    handleClick: (index: number) => void;
    squares: IBoardState;
}

export class Board extends React.Component<IBoardProps, any> {

    renderSquare(i: number): JSX.Element {
        return <Square.Square value={this.props.squares[i]} onClick={() => this.props.handleClick(i)} />;
    }

    render(): JSX.Element {
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