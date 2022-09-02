import "./App.css";
import {useEffect, useState, React} from "react";
import ParentCard from "./components/ParentCard";

//exported to be used in the rest of the aplication
// https://www.freecodecamp.org/news/react-context-for-beginners/
// export const ThemeContext = React.createContext()


function App() {

  const [ data, setData] = useState([])

  useEffect( () => {
    async function fetchData(){
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setData(data)
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <ParentCard data={data}/>
      </header>
    </div>
  );
}

export default App;
