import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { addTodo, selectUser } from '../features/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

export const DataFetcher = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const apiFetch = async () => {
        const url = "https://jsonplaceholder.typicode.com/users/" + user + "/todos"
        const response = await fetch(url)
        const data = await response.json()

        data.forEach(item => {
            dispatch(addTodo({
                userId: item.userId,
                title: item.title,
                completed: item.completed,
                todoId: item.id,
                id: Date.now()
            }))
        })  
    }


    return (
        <div>
            <button
                type="button"
                onClick={apiFetch}
                className="btn btn-primary btn-lg"
                style={{"width": "200px", "height": "60px"}}
            >
                Fetch API data
            </button>
        </div>
    )
}
