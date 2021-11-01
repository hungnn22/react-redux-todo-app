import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { useDispatch } from "react-redux";
import Toast from 'components/Toast';
import { deleteTodo, setEditTodoId, toggleTodo } from 'redux/actions/todoAction';
import { useEffect } from 'react';

const Todo = ({ todo }) => {


    const dispatch = useDispatch()

    useEffect(() => {
        console.log('TODO');
    }, [])

    const handleToggle = () => {
        if (!todo.completed) {
            Toast('info', '🎯 Completed!')
        }
        dispatch(toggleTodo(todo))
    }

    const handleDelete = () => {
        Toast('error', '👌 Deleted!')
        dispatch(deleteTodo(todo.id))
    }

    const handleEdit = () => {
        dispatch(setEditTodoId(todo))
    }

    return (

        <div
            className={todo.completed ? 'todo-row complete' : 'todo-row'}>
            <div onClick={() => handleToggle(todo)} className="todo-name">{todo.task}</div>
            <div className='icons'>
                <RiCloseCircleLine
                    className='delete-icon'
                    onClick={() => handleDelete(todo.id)}
                />
                <>{todo.completed || <TiEdit
                    className='edit-icon'
                    onClick={handleEdit}
                />}</>

            </div>
        </div>

    )
}

export default Todo
