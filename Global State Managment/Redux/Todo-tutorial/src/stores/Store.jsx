import {configureStore} from '@reduxjs/toolkit'
import { todosSlice } from './TodosSlice';


 const store = configureStore({
    reducer: {
        todos: todosSlice.reducer
    }
});


export default store;