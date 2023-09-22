// use selector to access the state in the store and dispatch to dispatch an action to the store
import { useSelector, useDispatch } from 'react-redux'
import Counter from './components/Counter'
import {actions} from './store/index'

function App() {

const counter = useSelector((state) => state.counter); // allows to access the state of the store (counter)
const dispatch = useDispatch(); // allows to access the actions of the store (dispatch)

  return (
    <>
    <Counter 
      counter={counter}
      increment={() => dispatch(actions.increment())}
      decrement={() => dispatch(actions.decrement())}
      addBy2={() => dispatch(actions.addBy2(2))} // payload is 2
      multiplyBy2={() => dispatch(actions.multiplyBy2(2))} 
      reduceBy2={() => dispatch(actions.reduceBy2(2))}
    />
    </>
  )
}

export default App
