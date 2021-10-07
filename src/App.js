import {useState} from 'react'
import UserControls from "./components/UserControls";
import Header from "./components/Header";
import Tasks from './components/Tasks';


function App() {
  const [tasks, setTasks] = useState([])

//Add task
  const addTask = (task)=> {
    const id = Math.floor(Math.random() * 10000) + 1
    const completed = false
    const newTask = { id, completed, ...task }
    setTasks([...tasks, newTask])
  }

  //Task counter
  const TaskCount = () => {
    return (<p>You have {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} </p>)
    
  }

//Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

// Complete task
 const completeTask = (id) => {
  setTasks(tasks.map(task => {
    if(task.id === id){
      return{...task, completed: !task.completed}
    }
    return task
  }))
}

  return (
    <div className="container">
      <Header />
      <TaskCount />
      {tasks.length > 0 ? <Tasks setTasks={setTasks} tasks={tasks} deleteTask={deleteTask} completeTask={completeTask}/> : 'You\'re all done!'}
      <UserControls onAdd={addTask} setTasks={setTasks}/>
    </div>
  );
}

export default App;
