import {combineReducers} from 'redux'
import {ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters} from './actions'

const {SHOW_ALL} = VisibilityFilters

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:            
            return action.filter    
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            console.log('Ingresa a todo::'+ action.id + action.text);
            return [
                ...state, 
                {
                    id: action.id,
                    text: action.text,
                    complete: false
                }
            ]
        case COMPLETE_TODO:
            console.log('Ingresa a elige ::' + action.id);
            return state.map(todo => 
                (todo.id === action.id) ? 
                     {...todo, complete: !todo.complete}
                     : todo             
                
                )
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;