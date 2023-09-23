import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { todosActions } from './store/TodoSlice';
import Todos from './components/Todos';

function App() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();


  useEffect(() => {

    console.log(todos);

  }, [todos]);


  return (
    <>
    <Todos todos={todos}
      dispatch={dispatch}
      actions={todosActions}
    />
    </>
  )
}

export default App
