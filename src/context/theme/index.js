import {useContext, createContext, useState} from 'react'
const black = "#000"
const white = "#FFF"
//store the data in ThemeContext, give it a default value
//store an object with the colours and function to set the colours. 
//you want to pass these props to other components, hence use createContext
//return of createContext function is saved in ThemeContext
const ThemeContext = createContext()

//when useThemeContext is called will call useContext with whatever is the value of ThemeContext is so ThemeContext will change. 
const useThemeContext = () => useContext(ThemeContext)

//ThemeContextProvider function will accept an argument of children. This component returns component that you will import in your app and wrap around everything.
//Provider is a property of the context returned by createContext funciton, is a component.
//Create a toggle function here so it can be seen everywhere
const ThemeContextProvider = ({children}) => {
  const [backgroundColor, setBackgroundColor] = useState(white)
  const [color, setColor] = useState(black)
  const [darkTheme, setDarkTheme] = useState(false)

  //setters are asynchronous
  function toggleTheme() {
    const newDarkTheme = !darkTheme
    const newBackgroundColor = newDarkTheme ? black : white
    const newColor = newDarkTheme ? white : black
    setBackgroundColor(newBackgroundColor)
    setColor(newColor)
    setDarkTheme(newDarkTheme)
  }

  return <ThemeContext.Provider value={{backgroundColor, color, darkTheme, toggleTheme}}>
    {children}
  </ThemeContext.Provider>
}

export {useThemeContext, ThemeContextProvider}
