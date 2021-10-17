import { ToggleSlider }  from "react-toggle-slider";

const Toggle = () => {

    const body = document.body
    const darkMode = "dark"
    const lightMode = "light"
    let theme

    theme = localStorage.getItem('Theme')

    if (theme === lightMode || theme === darkMode){
        body.classList.add(theme)
    } else {
        body.classList.replace(darkMode , lightMode)
    }

    const toggleTheme = () => {
        if(body.classList.contains('dark')){
            body.classList.remove('dark')
            localStorage.setItem('Theme', "light")
            theme = lightMode
        } else {
            body.classList.add('dark')
            localStorage.setItem('Theme', "dark")
            theme = darkMode
        }
    }
    return (
        <div className = "toggle-container">
            <ToggleSlider 
            active={theme === "dark" ? true : false}
            barWidth={60} 
            barBackgroundColor={'#0C0B22'}
            barBackgroundColorActive={'#dedede'}
            transitionDuration={'400ms'}
            draggable={false}
            onToggle={toggleTheme}
            />
        </div>
    )
}

export default Toggle
