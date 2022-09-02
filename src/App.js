import "./App.css";
import {useEffect, useState} from "react";
import ParentCard from "./components/ParentCard";


function App() {

  const [ allData, setAllData] = useState([])

  useEffect( () => {
    async function fetchData(){
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    setAllData(data)
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <ParentCard allData={allData}/>
      </header>
    </div>
  );
}

export default App;
