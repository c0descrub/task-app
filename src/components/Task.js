
import React from 'react'
import {VscChromeClose} from 'react-icons/vsc'
// import {useState} from 'react'


const Task = ({ tasks, task, completeTask, deleteTask, setTasks, onAdd }) => {

    const markCompleted = () => completeTask(task.id)
    const date = task.date
    const formattedDate = new Date(date).toLocaleDateString('en-US', {weekday: "short", month: "short", day: "numeric"})    

    return (
        <div className={`task-container ${task.completed ? "completed" : ""}`} id="task-container"> 
            <input className="task-container-checkbox" checked={task.completed} type="checkbox" onClick={markCompleted} style={{cursor: 'pointer'}}/>
            <div className="task-text-date">
                <h3 className="task-text">{task.text}</h3>
                <p className="task-date">{formattedDate}</p>
            </div>
            <VscChromeClose id="delete-button" className="hidden task-delete-button" style ={{cursor: 'pointer'}} onClick={() => deleteTask(task.id)}/>
        </div>
    )
}

export default Task
