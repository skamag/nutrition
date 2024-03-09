import matvarer from './matvarer.json'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import AddFoods from './components/AddFoods';
import Grid from './components/Grid'
import FoodList from './components/FoodList';
import './App.css';

function App() {
  // const url = 'https://www.matvaretabellen.no/api/nb/foods.json'

  const [addedList, setAddedList] = useState([])

  function handleAddFood(newFood) {
    setAddedList((addedList) => [...addedList, newFood])
    console.log(addedList)
  }

  function handleRemove(name) {
    setAddedList((addedList) => addedList.filter((item) => item !== name))
  }

  // useEffect(() => {
  //   fetch(matvarer)
  //     .then((matvarer) => {
  //       console.log(matvarer.name)
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <AddFoods handleAddFood={handleAddFood} matvarer={matvarer} />
          <FoodList addedList={addedList} handleRemove={handleRemove} />
        </div>
        <Grid />
      </main>
    </div>
  );
}

export default App;