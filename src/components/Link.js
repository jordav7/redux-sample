import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Link extends Component {
    static propTypes = {
        active: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
        onClick: PropTypes.func.isRequired
    }

    constructor() {
        super();
        this.executeOnClick = this.executeOnClick.bind(this);
    }

    executeOnClick(e) {
        e.preventDefault();
        this.props.onClick();
    }

    render() {
        if (this.props.active) {
            return <span>{this.props.children}</span>
        }
        return (
            // eslint-disable-next-line
            <a href="#" onClick={this.executeOnClick}>
                {this.props.children}
            </a>
        )
    }
}
