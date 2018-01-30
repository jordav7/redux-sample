/**
 * tipos de acciones
 */

 export const ADD_TODO = 'ADD_TODO'
 export const COMPLETE_TODO = 'COMPLETE_TODO'
 export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

 /**
  * mas constantes
  */
 export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
 }

 /**
  * creamos acciones
  */
let nextTodoId = 0

export function addTodo(text) {
  return {type: ADD_TODO, id: nextTodoId++, text}
}

export function completeTodo(index) {
  return {type: COMPLETE_TODO, id: index}
}

export function setVisibilityFilter(filter) {
  return {type: SET_VISIBILITY_FILTER, filter}
}