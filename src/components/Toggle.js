const Toggle = () => {

    const body = document.body
    const slider = document.getElementById('slider')
    const lightTheme = "light"
    const darkTheme = "dark"
    const input = document.getElementById('checkbox')
    let theme
    let checked

    if(localStorage) {
        theme = localStorage.getItem("theme")
        checked = localStorage.getItem("checked")
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)

    } else {
        body.classList.add(lightTheme)
        localStorage.setItem('theme', "light")
        localStorage.setItem('checked', false)
    }

    const switchTheme = (e) => {
        if(theme === darkTheme){
            body.classList.replace(darkTheme, lightTheme)
            slider.classList.replace(darkTheme, lightTheme)
            slider.innerHTML = "Light"
            localStorage.setItem('theme', "light")
            localStorage.setItem('checked', false)
            theme = lightTheme
            

        } else {
            body.classList.replace(lightTheme, darkTheme)
            slider.classList.replace(lightTheme, darkTheme)
            slider.innerHTML = "Dark"
            localStorage.setItem('theme', "dark")
            localStorage.setItem('checked', true)
            theme = darkTheme
            
        }

    }

    return (
        <label className="switch">
            <input 
            type="checkbox"
            onClick = {(e) => switchTheme(e)}
            id = "checkbox"
            />
            <span id="slider" className={`slider round ${checked === true ? "dark" : "light"}`}> Light </span>
        </label>
    )
}

export default Toggle
