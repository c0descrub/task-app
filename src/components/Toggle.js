const Toggle = () => {

    const toggleTheme = () => {
        const slider = document.getElementById('slider')
        if(slider.classList.contains('light')){
            slider.classList.remove('light')
            slider.classList.add('dark')
            slider.innerHTML = "Dark"
            document.body.classList.add('dark')
        } else if(slider.classList.contains('dark')){
            slider.classList.remove('dark')
            slider.classList.add('light')
            document.body.classList.remove('dark')
            slider.innerHTML = "Light"
        } 

    }
    return (
        <label className="switch">
            <input type="checkbox" onClick={toggleTheme}/>
            <span id="slider" className="slider round light">Light</span>
        </label>
    )
}

export default Toggle
