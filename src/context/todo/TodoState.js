import React,{useReducer} from "react";
import { TodoScreen } from "../../screens/TodoScreen";
import {TodoContext} from './todoContext'
import { todoReducer } from "./todoReducer";
import { ADD_TODO, UPDATE_TODO,  REMOVE_TODO  } from "../types";


export const TodoState=({children})=>{
    const initialState={
        todos:[
            { id: '1', title: 'Выучить' }
        ]
    }
   const [state, dispatch]= useReducer(todoReducer, initialState)

   const addTodo=title=>dispatch({type:ADD_TODO, title})

   const removeTodo=id=>dispatch({type:REMOVE_TODO, id})

   const updateTodo=(id, title)=>dispatch({type: UPDATE_TODO, id, title})

    return <TodoContext.Provider value={{
        addTodo,
        removeTodo,
        updateTodo,
        todos: state.todos
    }}>{children}
    </TodoContext.Provider>
}