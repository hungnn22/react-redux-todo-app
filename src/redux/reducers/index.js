import { combineReducers } from "redux";
import todoReducer from "redux/reducers/todoReducer"

const reducers = combineReducers({
    todo: todoReducer,
})

export default reducers