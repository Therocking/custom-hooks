import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer'


export const useTodo = () => {

    const inicialState = [
        // {
        //     id: new Date().getTime() * 2,
        //     descripcion: 'Recolectar la piedra del alma',
        //     done: false
        // }
    ]
    
    const init = () => {
        return JSON.parse(localStorage.getItem('todo')) || [];
    }

    const [todos, dispatch] = useReducer( todoReducer, inicialState, init );
    
        useEffect(() => {
          localStorage.setItem('todo', JSON.stringify(todos))
        }, [todos])
        
    
        const handleNewTodo = (todo) => {
            const action = {
                type: '[TODO] Add Todo',
                payload: todo
            }
    
            dispatch( action )
    
        }
    
        const handleDeleteTodo = (id) => {
            dispatch({
                type: '[TODO] Remove Todo',
                payload: id
            })
        };
    
        const handleToggleTodo = (id) => {
            dispatch({
                type: '[TODO] Toggle Todo',
                payload: id,
            })
        };


  return {
    handleDeleteTodo,
    handleNewTodo,
    handleToggleTodo,
    todos,
    todosCount: todos.length,
    todosPending: todos.filter( todo => !todo.done ).length
  }
}
