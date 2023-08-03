import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';

function TodoList({deleteTask, toggleTask, todos}) {
  return (
    <div className="todo-list">
        <div className="header">
            <h2>Todo List</h2>
        </div>
        <div className="list">
            {
                todos.length == 0 ? 
                <>
                    <h4>No Todos</h4>
                </> :
                <>
                    <ul>
                        {todos.map(todo => 
                            <li key={todo.id}>
                                <input type="checkbox" checked={todo.completed} onChange={(e) => toggleTask(todo.id, e.target.checked)}/>
                                <span className={todo.completed ? "completed" : ""}>{todo.task}</span>
                                <button className='btn btn-danger' onClick={() => deleteTask(todo.id)}>Delete</button>
                            </li>
                        )}
                        </ul>
                </>
            }
            </div>
    </div>
    
    )
}

TodoList.propTypes = {
    deleteTask: PropTypes.func.isRequired,
    toggleTask: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
}

export default TodoList
