import { connect } from 'react-redux'
import { completeTodo } from '../sample/actions'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../sample/actions'
const {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} = VisibilityFilters

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:            
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(t => t.complete);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.complete);
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {            
            dispatch(completeTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)

export default VisibleTodoList