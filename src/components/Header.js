const Header = ({setStatus, TaskCount}) => {

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <header>
            <h1 className="header-heading">My Tasks</h1>
            <TaskCount/>
            <p className="header-p">Filter by:</p>
            <select className="header-dropdown" onChange={statusHandler} type="dropdown">
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="incomplete">Not completed</option>
            </select>
        </header>
    )   
}

export default Header
