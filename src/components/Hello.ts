import * as React from "react";
import * as ReactDom from 'react-dom';

export class HelloComponents extends React.component<any, any> {
    render () {
        return <h1>Hello from {this.props.complier} and {this.props.framwork}!</h1>;
    }
}
