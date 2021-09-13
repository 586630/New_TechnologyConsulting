import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: 
        {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
            9: [],
            10: [],
        },
    selectedUser: 1
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            //state.todoList[state.selectedUser].push(action.payload)
            state.todoList[state.selectedUser].unshift(action.payload)
        },
        setCheck: (state, action) => {
            state.todoList[state.selectedUser].map(item => {
                if (action.payload === item.id) {
                    item.completed = !item.completed
                }
            })
        },
        setUser: (state, action) => {
            state.selectedUser = action.payload
        },
        removeTodo: (state, action) => {
            let list = state.todoList[state.selectedUser]

            for (var i = 0; i < list.length; i++) {
                if (list[i].id === action.payload) {
                    state.todoList[state.selectedUser].splice(i, 1)
                }
            }
        }
    }
});

export const { addTodo, setCheck, setUser, removeTodo } = todoSlice.actions

export const selectTodoList = state => state.todos.todoList[state.todos.selectedUser]
export const selectUser = state => state.todos.selectedUser

export default todoSlice.reducer