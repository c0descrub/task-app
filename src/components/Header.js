const Header = ({setStatus}) => {

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <header>
            <h1>
                My Tasks
            </h1>
            <select onChange={statusHandler} type="dropdown">
                <option value="all">All</option>
                <option value="complete">Complete</option>
                <option value="incomplete">Not completed</option>
            </select>
        </header>
    )   
}

export default Header
