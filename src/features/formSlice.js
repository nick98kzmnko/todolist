import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}

export const formSlice = createSlice({
    name:'formTask',
    initialState,
    reducers:{
        pushTasks: (state,action)=>{
            state.tasks.push(action.payload)
        },
        toogleTodo: (state,action)=>{
            const toogle  = state.tasks.find((task)=> task.id === action.payload)
            toogle.completed = !toogle.completed
        },
        deleteTodo: (state,action)=>{
            state.tasks = state.tasks.filter((task)=>task.id !== action.payload)
        }
    }
})

export const {pushTasks,toogleTodo,deleteTodo} = formSlice.actions

export default formSlice.reducer