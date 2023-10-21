import { useDispatch } from 'react-redux';
import classes from '../css/Form.module.css'
import { pushTasks } from '../features/formSlice';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function Form() {
    const [taskInput,setTaskInput] = useState('')
    const dispatch = useDispatch()
    const todo = {
        id: uuidv4(),
        text: taskInput,
        completed: false
    }
    function inputAddHandler (e){
        setTaskInput(e.target.value)
    }
    function addTaskHandler(){
      
        if(taskInput.length > 3){
            dispatch(pushTasks(todo))
            setTaskInput('')
        }
    }
    function handleEnterPress(code){
        if(code === 'Enter' && taskInput.length > 3){
            dispatch(pushTasks(todo))
            setTaskInput('')

        }
    }   
    return (
        <div className={classes.form}>
            <div>
                <input
                onInput={(e)=>{inputAddHandler(e)}}
                onKeyDown={(e)=>{handleEnterPress(e.code)}}
                value={taskInput}
                type="text" name='enterTask' className={classes.inputTask} placeholder='Enter Task' />
                <label htmlFor="enterTask" className={classes.label}>Enter Task</label>
            </div>
            <button 
            onClick={()=>{
                addTaskHandler()
            }}
            className={classes.addTaskBtn}
            >+</button>
        </div>
    )
}
export default Form;
