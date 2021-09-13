import React, { useState } from 'react'
import "./Input.css"

import { useDispatch, useSelector } from 'react-redux'
import { addTodo, selectTodoList, selectUser } from '../features/todoSlice'


const Input = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const todoList = useSelector(selectTodoList)

    const processTodo = () => {
        setInput("")
        
        dispatch(addTodo({
            userId: user,
            todoId: todoList.length+1,
            title: input,
            completed: false,
            id: Date.now()
        }))
    }
    
    return (
        <div className="input">
            <input type="text" value={input} onChange={e=>setInput(e.target.value)} />
            <button onClick={processTodo}>Add</button>
            
        </div>
    )
}

export default Input
