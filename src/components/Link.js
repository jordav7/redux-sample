import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Link extends Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    }
    render() {
        if (this.props.active) {
            return <span>{this.props.children}</span>
        }
        return (
            <a href="#" onClick={e => {e.preventDefault();this.props.onClick}}>
                {this.props.children}
            </a>
        )
    }
}
