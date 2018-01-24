import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'

export default class Footer extends Component {
  render() {
    return (
      <p>
        Show: {" "}
        <FilterLink filter="SHOW_ALL">
            Todos
        </FilterLink>
        {" , "}
        <FilterLink filter="SHOW_ACTIVE">
            Activo
        </FilterLink>
        {" , "}
        <FilterLink filter="SHOW_COMPLETED">
            Completado
        </FilterLink>
      </p>
    )
  }
}
