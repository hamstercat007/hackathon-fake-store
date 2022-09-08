import "./App.css";
import {useEffect, useState, React} from "react";
import ParentCard from "./components/ParentCard";
import ThemeSwitcher from "./components/ThemeSwitcher";
import {useThemeContext} from './context/theme'

//exported to be used in the rest of the aplication
// https://www.freecodecamp.org/news/react-context-for-beginners/
// export const ThemeContext = React.createContext()


function App() {

  const [ data, setData] = useState([])
  const {backgroundColor, color } = useThemeContext()

  useEffect( () => {
    async function fetchData(){
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setData(data)
    }
    fetchData();
  }, []);


  return (
    <div className="App" style={{backgroundColor, color}}>
      <header className="App-header">
      <h1>Lisa's Fake Store</h1>
      <ThemeSwitcher />
        <ParentCard data={data}/>
      </header>
    </div>
  );
}

export default App;
