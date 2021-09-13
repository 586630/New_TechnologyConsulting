import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/todoSlice';

export const ProfilePicker = () => {
    const dispatch = useDispatch()

    const changeUser = (value) => {
        console.log(`Changed to user ${value}`)
        dispatch(setUser(value))   
    }

    return (
        <div className="profilePicker">

            <select 
                className="form-select" 
                aria-label="Default select example"
                onChange={e => changeUser(e.target.value)}
                style={{"margin-top": "150px"}}
            >
                <option value="1" selected>User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
                <option value="4">User 4</option>
                <option value="5">User 5</option>
                <option value="6">User 6</option>
                <option value="7">User 7</option>
                <option value="8">User 8</option>
                <option value="9">User 9</option>
                <option value="10">User 10</option>
            </select>
        </div>
    )
}
