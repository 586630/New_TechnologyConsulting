import React from 'react'
import "./TodoItem.css"

import TodoRemover from './TodoRemover'

import Checkbox from "@material-ui/core/Checkbox"

import { useDispatch } from 'react-redux'
import { setCheck } from '../features/todoSlice'

export const TodoItem = ({ userId, todoId, title, completed, id}) => {
    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(setCheck(id))
    }

    return (
        <div className="todoItem">
            <Checkbox
                checked={completed}
                color="primary"
                onChange={handleCheck}
                inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <p className={completed && "todoItem--done"}>{title}</p>
            <TodoRemover todoId={id} />
        </div>
    )
}
