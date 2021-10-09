import {useState, useEffect} from 'react'
import UserControls from "./components/UserControls";
import Header from "./components/Header";
import Tasks from './components/Tasks';


function App() {
//States
  const [tasks, setTasks] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTasks, setFilteredTasks] = useState ([])



//Functions

//filter handler
const filterHandler = () => {
  switch(status) {
    case 'complete' : setFilteredTasks(tasks.filter(task => task.completed === true))
      break;
    case 'incomplete' : setFilteredTasks(tasks.filter(task => task.completed === false))
      break;
    default: setFilteredTasks(tasks)
      break;
  }
}

//Add task
  const addTask = (task)=> {
    const id = Math.floor(Math.random() * 10000) + 1
    const completed = false
    const newTask = { id, completed, ...task }
    setTasks([...tasks, newTask])
  }

//Task counter
  const TaskCount = () => {
    let counter = 0;
    for ( let i = 0; i < tasks.length; i++ ) {
      if(tasks[i].completed === true) counter++;
    } return(<p>{counter} of {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'} complete</p>)
    
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

// useEffect stuff
useEffect(() => {
  filterHandler()
},[tasks,status])

useEffect(() => {
  const localData = localStorage.getItem('Task List')
  if(localData) {
    setTasks(JSON.parse(localData))
  }
}, [])

useEffect(() => {
  localStorage.setItem('Task List' , JSON.stringify(tasks))
})


  return (
    <div className="container">
      <Header setStatus={setStatus}/>
      <TaskCount/>
      {tasks.length > 0 ? <Tasks setTasks={setTasks} tasks={tasks} deleteTask={deleteTask} completeTask={completeTask} filteredTasks={filteredTasks}/> : 'You\'re all done!'}
      <UserControls onAdd={addTask} setTasks={setTasks}/>
    </div>
  );
}

export default App;
