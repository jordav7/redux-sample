import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../sample/actions'

export default class AddTodo extends Component {

    constructor() {
        super();
        this.execute.bind(this);
    }

    execute(e) {
        e.preventDefault();
        const { dispatch } = this.props;
        if (!this.input.value.trim()) {
            return
        }
        dispatch(addTodo(this.input.value));
    }
    
    render() {
        return (
        <div>
            <form onSubmit={this.execute}>
                <input ref={(node) => {this.input = node}} />
            </form>
        </div>
        )
    }
}
connect()(AddTodo)
