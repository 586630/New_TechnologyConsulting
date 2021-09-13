import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'
import "./TodoRemover.css"

const TodoRemover = (props) => {
    const dispatch = useDispatch()

    const remove = () => {
        dispatch(removeTodo(props.todoId))
    }

    return (
        <div className="todoRemover" >
            <img className="removeIcon" 
            onClick={remove}
            src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
            alt="" />
        </div>
    )
}

export default TodoRemover



