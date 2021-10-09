
import React from 'react'
import {VscChromeClose} from 'react-icons/vsc'
// import {useState} from 'react'


const Task = ({ tasks, task, completeTask, deleteTask, setTasks, onAdd }) => {

    const markCompleted = () => completeTask(task.id)
    
    const date = task.date
    const formattedDate = new Date(date).toLocaleDateString('en-US', {weekday: "short", month: "short", day: "numeric"})
    const dateAdded = new Date().toLocaleDateString('en-US', {year: "2-digit", month: "2-digit", day: "2-digit"})

    return (
        <div> 
            <input checked={task.completed} type="checkbox" onClick={markCompleted}/>
            <h3>{task.text}</h3>
            <p>{dateAdded}</p>
            <p>{formattedDate}</p>
            <VscChromeClose style ={{cursor: 'pointer'}} onClick={() => deleteTask(task.id)}/>
        </div>
    )
}

export default Task
