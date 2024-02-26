import { useEffect } from 'react'
import Header from './components/Header'
import AddFoods from './components/AddFoods';
import Grid from './components/Grid'
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://www.matvaretabellen.no/api/nb/foods.json')
      .then((response) => response.json)
      .then((data) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <AddFoods />
        <Grid />
      </main>
    </div>
  );
}

export default App;
