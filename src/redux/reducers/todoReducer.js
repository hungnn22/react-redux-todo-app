import faker from "faker"
import * as types from "redux/constants/actionTypes"

const initialState = {
    list: [
        {
            "task": "Wake up",
            "completed": false,
            "createAt": 1635694920,
            "id": "1"
        },
        {
            "task": "Drink Coffe",
            "completed": false,
            "createAt": 1635694860,
            "id": "2"
        },
        {
            "task": "Wash",
            "completed": false,
            "createAt": 1635694800,
            "id": "3"
        },
    ],
    editTodo: null
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
            return {
                ...state,
                list: state.list.filter(item => (item.id !== action.payload)),
                editTodo: null
            }

        case types.IS_EDIT_TODO: {
            return {
                ...state,
                editTodo: action.payload
            }
        }
        default: return state
    }
}
export default todoReducer
