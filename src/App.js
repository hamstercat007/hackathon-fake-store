import "./App.css";
import useEffect from "react";

function App() {
  useEffect(async () => {
    const results = await fetch("https://fakestoreapi.com/products");
  });

  console.log(results);

  return (
    <div className="App">
      <header className="App-header">
        <p></p>
      </header>
    </div>
  );
}

export default App;
