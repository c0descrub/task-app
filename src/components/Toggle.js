const Toggle = () => {

    const body = document.body
    const slider = document.getElementById('slider')
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme;

    if(localStorage) {
        theme = localStorage.getItem("theme")
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)

    } else {
        body.classList.add(lightTheme)


    }

    const switchTheme = (e) => {
        if(theme === darkTheme){
            body.classList.replace(darkTheme, lightTheme)
            slider.classList.replace(darkTheme, lightTheme)
            slider.innerHTML = "Light"
            localStorage.setItem('theme', "light")
            theme = lightTheme

        } else {
            body.classList.replace(lightTheme, darkTheme)
            slider.classList.replace(lightTheme, darkTheme)
            slider.innerHTML = "Dark"
            localStorage.setItem('theme', "dark")
            theme = darkTheme
            
        }
    }

    return (
        <label className="switch">
            <input 
            type="checkbox"
            onClick = {(e) => switchTheme(e)}
            />
            <span id="slider" className={`slider round ${theme === lightTheme ? "light" : "dark"}`}> Light </span>
        </label>
    )
}

export default Toggle
