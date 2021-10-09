import Task from "./Task"

const Tasks = ({ tasks, deleteTask, completeTask, setTasks, filteredTasks}) => {

        
    return (
        <div>
           {filteredTasks.map((task)=>(<Task tasks={tasks} setTasks={setTasks} key={task.id} task={task} deleteTask={deleteTask} completeTask={completeTask} filteredTasks={filteredTasks}/>))} 
        </div>
        
    )
}

export default Tasks
