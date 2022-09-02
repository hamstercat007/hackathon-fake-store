import "./App.css";
import {useEffect, useState} from "react";
import ParentCard from "./components/ParentCard";


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

  console.log(allData);


// Plan:
//  - get all data
//  - use array to map to card components
// get image, description, name, id/key from category
// allData.map , pass card component to app.js
// {
//   "id": 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   "rating": {
//       "rate": 3.9,
//       "count": 120
//   }
// }


  return (
    <div className="App">
      <header className="App-header">
        <p>product name: </p>
        <ParentCard allData={allData}/>
      </header>
    </div>
  );
}

export default App;
