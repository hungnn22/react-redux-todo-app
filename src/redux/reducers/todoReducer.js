import faker from "faker"
import * as types from "redux/constants/actionTypes"

const initialState = {
    list: [],
    loading: false,
    error: null,
    editTodo: null,
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_TODO: {
            const newList = state.list.map(t => (
                t.id === action.payload.id ? { ...action.payload, completed: !action.payload.completed } : t
            ))
            return {
                ...state,
                list: newList
            }
        }
        case types.ADD_TODO: {
            const newList = [...state.list]
            const todo = {
                id: faker.datatype.uuid(),
                completed: false,
                task: action.payload,
            }
            newList.push(todo)
            return {
                ...state,
                list: newList
            }
        }
        case types.UPDATE_TODO: {
            const cloneList = [...state.list]
            const newList = cloneList.map(todo => (
                todo.id === action.payload.id ? action.payload.todo : todo
            ))
            return {
                ...state,
                list: newList,
                editTodo: null
            }
        }

        case types.DELETE_TODO:
            const newList = [...state.list]
            return {
                ...state,
                list: newList.filter(item => (item.id !== action.payload))
            }

        case types.IS_EDIT_TODO: {
            return {
                ...state,
                editTodo: action.payload
            }
        }

        case types.GET_TODOS: {
            return {
                ...state,
                loading: false,
                list: action.payload
            }
        }

        case types.FETCH_TODOS: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case types.FETCH_TODOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                list: action.payload
            }
        }
        case types.FETCH_TODOS_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: return state
    }
}
export default todoReducer
