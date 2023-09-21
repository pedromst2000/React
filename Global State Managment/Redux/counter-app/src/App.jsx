// use selector to access the state in the store and dispatch to dispatch an action to the store
import { useSelector, useDispatch } from 'react-redux'
import Counter from './components/Counter'

function App() {

const counter = useSelector((state) => state.counter); // allows to access the state of the store (counter)
const dispatch = useDispatch(); // allows to access the actions of the store (dispatch)

  return (
    <>
    <Counter 
      counter={counter}
      increment={() => dispatch({type: 'INCREMENT', payload: 1})}
      decrement={() => dispatch({type: 'DECREMENT', payload: 1})}
      addBy2={() => dispatch({type: 'ADD_BY_2'})}
      multiplyBy2={() => dispatch({type: 'MULTIPLY_BY_2'})}
      reduceBy2={() => dispatch({type: 'REDUCE_BY_2'})}
    />
    </>
  )
}

export default App
