import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

export default class TodoList extends Component {

    static propTypes = {
        todos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            complete: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
          }).isRequired).isRequired,
          onTodoClick: PropTypes.func.isRequired
    }  

    todoClick(id) {
        this.props.onTodoClick(id);
    }

    render() {        
        return (
            <ul>
                {this.props.todos.map(todo => 
                    <Todo key={todo.id} {...todo} onClick={() => this.todoClick(todo.id)} />)}
            </ul>
        )
    }
}
