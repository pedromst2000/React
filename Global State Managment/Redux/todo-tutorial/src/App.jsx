import {useSelector, useDispatch} from 'react-redux'
import Todos from './components/Todos';

function App() {

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <>
    <Todos todos={todos} dispatch={dispatch}/>
    </>
  )
}

export default App
