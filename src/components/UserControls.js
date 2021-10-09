import { useState } from "react"
import Task from "./Task"
//import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars"

const UserControls = ({ onAdd, task }) => {

    const[text, setText] = useState('')
    const[date, setDate] = useState('')

    const reset = () => {
        setText("")
        setDate("")
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task!')
            return
        }
        if(!date) {
            alert('Please add a date!')
            return
        }

        onAdd({text, date})
        reset()
    }

    return (
            <form onSubmit={onSubmit}>
                <input 
                type="text" 
                placeholder="Add a new task..." 
                value={text}
                onChange={(e) => setText(e.target.value)}
                ></input>

                <input 
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                ></input>
                <input type="submit" value="Submit"></input>
            </form>
    )
}

export default UserControls
