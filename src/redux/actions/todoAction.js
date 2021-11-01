import * as types from "redux/constants/actionTypes"
import todoApi from "apis/todoApi"

export const fetchTodo = () => {
    return async (dispatch) => {
        dispatch({
            type: types.FETCH_TODOS,
        })

        try {
            const { data } = await todoApi.getAll()
            dispatch(getTodos(data))
        } catch (error) {
            dispatch({
                type: types.FETCH_TODOS_FAILED,
                payload: error.message
            })
        }
    }
}

export const getTodos = todos => {
    return {
        type: types.GET_TODOS,
        payload: todos,
    }
}

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
    payload: { id, todo },
})

export const deleteTodo = id => (
    async (dispatch) => {
        try {
            const { data } = await todoApi.deleteById(id)
            dispatch({
                type: types.DELETE_TODO,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }
)



export const setEditTodoId = todo => (
    {
        type: types.IS_EDIT_TODO,
        payload: todo
    }
)