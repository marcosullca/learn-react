import React, { Component } from 'react'
import CounterC_child from './CounterC_child';

export default class CounterC extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            contador: 4
        };
    }

    render() {
        return (
            <div>
                <CounterC_child contador={this.state.contador}/>
                <input type="button" value="contar" onClick={
                ()=> this.setState({contador: this.state.contador +1})
            } />
            </div>
        )
    }
}
