import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { addTodo, selectUser } from '../features/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

export const DataFetcher = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    const apiFetch = async () => {
        const url = "https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20"
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
