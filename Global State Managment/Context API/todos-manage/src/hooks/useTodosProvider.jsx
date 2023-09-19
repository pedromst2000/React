import  { useContext } from 'react'
import TodosContext from '../context/TodosProvider'

export default function useTodosProvider() {
    return useContext(TodosContext)
}
