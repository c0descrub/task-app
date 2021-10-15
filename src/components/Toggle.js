import {useState, useEffect} from 'react'

const Toggle = () => {

    const [theme, setTheme] = useState('Light')

    const toggleTheme = (e) => {

        const body = document.body
        const slider = document.getElementById('slider')

        if(theme === 'Light'){
            slider.classList.remove('light')
            slider.classList.add('dark')
            slider.innerHTML = "Dark"
            body.classList.add('dark')
            localStorage.setItem("theme",'Dark')
            setTheme('Dark')
            
        } else if(theme === 'Dark'){
            slider.classList.remove('dark')
            slider.classList.add('light')
            body.classList.remove('dark')
            slider.innerHTML = "Light"
            localStorage.setItem("theme",'Light')
            setTheme('Light')
        } 

    }

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme', theme)
        if(savedTheme) {
          setTheme(theme)
        }
      }, [theme, setTheme])

    useEffect(() => {
        localStorage.setItem('theme' , theme)
      }, [theme, setTheme])

    return (
        <label className="switch">
            <input type="checkbox" onClick={(e) => toggleTheme(e)}/>
            <span id="slider" className="slider round light">Light</span>
        </label>
    )
}

export default Toggle
