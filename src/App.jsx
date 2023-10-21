import { useSelector } from 'react-redux';
import Form from './components/Form';
import FormItem from './components/FormItem';
import classes from './css/App.module.css';

function App() {

  const todos = useSelector((state)=>state.formTask.tasks)
  return (
    <div className="App">
      <div className={classes.app__wrapper}>
        <h1 className={classes.header}>TODO LIST</h1>
        <Form/>

        {todos.map(todo=>{
         return (
          <FormItem
          key={todo.id}
          task={todo}
          />
          )
        })}
      </div>
    </div>
  );
}

export default App;
