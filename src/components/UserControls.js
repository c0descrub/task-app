import { useState } from "react"

const UserControls = ({ onAdd }) => {

    const [text, setText] = useState('')
    

    const reset = () => {
        setText("")
        setDate(today)
    }

    const currentDate = new Date()
    const today = currentDate.toISOString().substr(0, 10)
    
    const [date, setDate] = useState(today)

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
                className="user-controls__text" 
                placeholder="Add a new task..." 
                value={text}
                onChange={(e) => setText(e.target.value)}
                >

                </input>

                <input 
                type="date"
                className="user-controls__date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                ></input>
                <hr/>
                <button className="user-controls__button" type="submit">Add Task</button>
            </form>
    )
}

export default UserControls
