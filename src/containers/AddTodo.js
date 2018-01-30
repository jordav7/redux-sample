import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../sample/actions'

class AddTodo extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
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
            <form onSubmit={this.handleSubmit}>
                <input ref={(node) => {this.input = node}} />
                <button type="submit">Añadir tarea</button>
            </form>
        </div>
        )
    }
}
export default connect()(AddTodo)
