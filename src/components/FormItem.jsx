import { useDispatch } from 'react-redux'
import classes from '../css/FormItem.module.css'
import { toogleTodo, deleteTodo } from '../features/formSlice'
export default function FormItem({task}) {
    const isCompleted = task.completed
    const dispatch = useDispatch()

    function addToogleHandler(id){
        dispatch(toogleTodo(id))
    }   
    function deleteHandler(id){
        dispatch(deleteTodo(id))
    }
  return (
    <div className={classes.formItem}>
        <button className={`${classes.completed}`} 
        onClick={()=>{addToogleHandler(task.id)}}
        >Completed</button>
        <div className={`${classes.text} ${isCompleted ? `${classes.taskCompleted}` : ''}`}>{task.text}</div>
        <button className={classes.delete} onClick={()=>{deleteHandler(task.id)}}>Delete</button>
    </div>
  )
}
