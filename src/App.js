import "./App.css";
import {useEffect, useState} from "react";


function App() {

  const [ allData, setAllData] = useState([])

  useEffect( () => {
    async function fetchData(){
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json()
    setAllData(data)
    }
    fetchData();
  }, []);

  console.log(allData.promisResult);

  return (
    <div className="App">
      <header className="App-header">
        <p></p>
      </header>
    </div>
  );
}

export default App;
