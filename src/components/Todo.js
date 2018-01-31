import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todo extends Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        complete: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }

    render() {
        return (
        <li onClick={this.props.onClick} style={{ textDecoration: this.props.complete ? 'line-through' : 'none'}}>
            {this.props.text}
        </li>
        )
    }
}
