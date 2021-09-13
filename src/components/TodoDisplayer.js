import React from 'react'
import "./TodoDisplayer.css"

import { useSelector } from 'react-redux';

import { TodoItem } from './TodoItem';
import { selectTodoList } from '../features/todoSlice';

export const TodoDisplayer = () => {
    const todoList = useSelector(selectTodoList)

    return (
        <div className="todoContainer">
            {
            todoList.map(item => (
              <TodoItem 
                userId={item.userId}
                title={item.title}
                completed={item.completed}
                todoId={item.userId}
                id={item.id}
              />
            ))
          }
            
        </div>
    )
}
