import {createStore} from 'redux'


// reducer function
const reducer = (state = {counter: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {counter: state.counter + action.payload};
        case 'DECREMENT':
            return {counter: state.counter - action.payload};
        case 'ADD_BY_2':
            return {counter: state.counter + 2};
        case 'MULTIPLY_BY_2':
            return {counter: state.counter * 2};
        case 'REDUCE_BY_2':
            return {counter: state.counter - 2};
            
        default:
            return state;
    }
}

const store = createStore(reducer);


export default store;

 