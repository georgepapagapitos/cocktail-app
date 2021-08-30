import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [drink, setDrink] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getDrink = async () => {
      try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        setDrink(response.data.drinks[0]);
      } catch (err) {
        console.log(err);
      }
    }
    getDrink();
  }, []);

  const nextDrink = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      setDrink(response.data.drinks[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const searchForDrink = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
      setDrink(response.data.drinks[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div align='center'>
      <div>
        <h1>{drink.strDrink}</h1>
        <h2>{drink.strCategory}</h2>
      </div>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      <div>
        <button>Like</button>
        <button>Dislike</button>
        <button onClick={nextDrink}>Next Drink</button>
      </div>
      <ul>
        {drink.strIngredient1 ? <li>{drink.strIngredient1} {drink.strMeasure1}</li> : null}
        {drink.strIngredient2 ? <li>{drink.strIngredient2} {drink.strMeasure2}</li> : null}
        {drink.strIngredient3 ? <li>{drink.strIngredient3} {drink.strMeasure3}</li> : null}
        {drink.strIngredient4 ? <li>{drink.strIngredient4} {drink.strMeasure4}</li> : null}
        {drink.strIngredient5 ? <li>{drink.strIngredient5} {drink.strMeasure5}</li> : null}
        {drink.strIngredient6 ? <li>{drink.strIngredient6} {drink.strMeasure6}</li> : null}
        {drink.strIngredient7 ? <li>{drink.strIngredient7} {drink.strMeasure7}</li> : null}
        {drink.strIngredient8 ? <li>{drink.strIngredient8} {drink.strMeasure8}</li> : null}
        {drink.strIngredient9 ? <li>{drink.strIngredient9} {drink.strMeasure9}</li> : null}
        {drink.strIngredient10 ? <li>{drink.strIngredient10} {drink.strMeasure10}</li> : null}
      </ul>
      <div>
        <p>{drink.strInstructions}</p>
        <p>Serve in a {drink.strGlass}</p>
      </div>
      <div>
        <form onSubmit={searchForDrink}>
          <input type='text' placeholder='Find a drink...' value={search} onChange={handleChange} />
          <button type='submit'>Find</button>
        </form>
      </div>
    </div>
  );
}

export default App;
