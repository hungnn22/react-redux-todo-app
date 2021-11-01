import Todo from "components/Todo";
import TodoForm from "components/TodoForm";
import { useSelector } from "react-redux";

function TodoList() {

    const todos = useSelector(state => state.todo.list)
    const editTodo = useSelector(state => state.todo.editTodo)

    return (
        <>{editTodo == null ?
            (<>
                <h1>Plan for Today? 👀</h1>
                <TodoForm />
                {todos.map((todo, index) => (
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