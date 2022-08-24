import React, { Component } from 'react'

export default class CounterC_child extends Component {
    render() {
        return (
            <div>
                <h6>{this.props.contador}</h6>
            </div>
        )
    }
}
