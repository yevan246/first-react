import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.find(item => item.id === action.payload.id)
            if(todo) {
                todo.done = action.payload.checked
            }
        },
        deleteToDo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {addTodo, toggleTodo, deleteToDo} = todoSlice.actions

export default todoSlice.reducer