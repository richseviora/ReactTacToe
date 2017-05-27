import * as React from 'react';


export interface ISquareProps {
    value: string;
    onClick: () => void;
}

export class Square extends React.Component<ISquareProps, any> {
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