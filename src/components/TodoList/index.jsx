import Todo from "components/Todo";
import TodoForm from "components/TodoForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchTodo } from "redux/actions/todoAction";

function TodoList() {

    const todos = useSelector(state => state.todo.list)
    const editTodo = useSelector(state => state.todo.editTodo)
    const loading = useSelector(state => state.todo.loading)

    const dispatch = useDispatch()

    console.log(todos);

    useEffect(() => {
        dispatch(fetchTodo())
        console.log("LIST");
    }, [])



    return (
        <>{editTodo == null ?
            (<>
                <h1>Plan for Today? 👀</h1>
                <TodoForm />
                {loading ? <h4 className="text-light">Loading...</h4> :   todos.map((todo, index) => (
                    <Todo
                        key={index}
                        todo={todo}
                    />
                ))}
            </>) :
            (<>
                <h1 className="">Update: {editTodo && editTodo.task}</h1>
                <TodoForm />
            </>)
        }</>
    );
}

export default TodoList;