import * as types from "redux/constants/actionTypes" 

export const toggleTodo = todo => ({
    type: types.TOGGLE_TODO,
    payload: todo,
})

export const addTodo = todo => ({
    type: types.ADD_TODO,
    payload: todo
})

export const updateTodo = (id, todo) => ({
    type: types.UPDATE_TODO,
    payload: {id, todo},
})

export const deleteTodo = id => ({
    type: types.DELETE_TODO,
    payload: id
})



export const setEditTodoId = todo => (
    {
        type: types.IS_EDIT_TODO,
        payload: todo
    }
)