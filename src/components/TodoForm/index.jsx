import Toast from "components/Toast";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addTodo, updateTodo } from "redux/actions/todoAction";

function TodoForm() {

  const editTodo = useSelector(state => state.todo.editTodo)
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const validateText = inputText => {
    return inputText.length > 0
  };

  const handleSubmit = e => {
    e.preventDefault()
    if (!validateText(text)) {
      Toast('error', '🤬 Must be more 0 characters!')
      return
    }
    setText('')

    if (editTodo !== null) {
      const todo = {
        ...editTodo,
        task: text
      }
      Toast('success', '😹 Updated!')
      dispatch(updateTodo(editTodo.id, todo))
    } else {
      Toast('success', '😹 Added!')
      dispatch(addTodo(text))
    }
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {!editTodo ?
        (<>
          <input
            placeholder='New task...'
            name='text'
            value={text}
            onChange={e => setText(e.target.value)}
            className='todo-input'
          />
          <button className='todo-button'>
            Save
          </button>
        </>) :
        (<>
          <input
            autoFocus
            placeholder="New name..."
            name='text'
            value={text}
            onChange={e => setText(e.target.value)}
            className='todo-input edit'
          />
          <button className='todo-button edit'>
            Update
          </button>
        </>)}
    </form>
  );
}

export default TodoForm;