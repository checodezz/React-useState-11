import { useState } from "react";
import "./App.css";

const MoviesList = () => {
  const [currMovie, setCurrMovie] = useState([]);

  const handleMovieCheckbox = (event) => {
    const { checked, value } = event.target;
    checked
      ? setCurrMovie((prevVal) => [...prevVal, value])
      : setCurrMovie((prevVal) => prevVal.filter((movies) => movies != value));
  };

  return (
    <div>
      <label>Choose your favorite movie: </label>
      <br />
      <input type="checkbox" value="Action" onChange={handleMovieCheckbox} />
      Action
      <br />
      <input type="checkbox" value="Comedy" onChange={handleMovieCheckbox} />
      Comedy
      <br />
      <input type="checkbox" value="Drama" onChange={handleMovieCheckbox} />
      Drama
      {currMovie.length > 0 && <p>Selected Movies: {currMovie.join(", ")}</p>}
    </div>
  );
};

const FavFruit = () => {
  const [currFruits, setCurrFruits] = useState([]);

  const handleFruitsCheckbox = (event) => {
    const { checked, value } = event.target;
    checked
      ? setCurrFruits((prevValue) => [...prevValue, value])
      : setCurrFruits((prevVal) => prevVal.filter((fruit) => fruit !== value));
  };

  return (
    <div>
      <label>Choose your favorite fruit:</label>
      <br />
      <input type="checkbox" value="Apple" onChange={handleFruitsCheckbox} />
      Apple
      <br />
      <input type="checkbox" value="Orange" onChange={handleFruitsCheckbox} />
      Orange
      <br />
      <input type="checkbox" value="Banana" onChange={handleFruitsCheckbox} />
      Banana
      {currFruits.length > 0 && <p>Selected fruits: {currFruits.join(", ")}</p>}
    </div>
  );
};

const FavDrinks = () => {
  const [currFavDrink, setCurrFavDrink] = useState([]);

  const handleChangeEvent = (event) => {
    const { checked, value } = event.target;
    checked
      ? setCurrFavDrink((prevValue) => [...prevValue, value])
      : setCurrFavDrink((prevValue) =>
          prevValue.filter((drink) => drink != value),
        );
  };
  return (
    <div>
      <label>Choose your favorite drinks: </label>
      <br />
      <input type="checkbox" value="Coffee" onChange={handleChangeEvent} />{" "}
      Coffee
      <br />
      <input type="checkbox" value="Tea" onChange={handleChangeEvent} /> Tea
      <br />
      <input
        type="checkbox"
        value="Juice"
        onChange={handleChangeEvent}
      /> Juice{" "}
      {currFavDrink.length > 0 && (
        <p>Selected drink: {currFavDrink.join(", ")}</p>
      )}
    </div>
  );
};

const FavDessert = () => {
  const [currFavDessert, setCurrFavDessert] = useState([]);
  const handleChangeEvent = (event) => {
    const { checked, value } = event.target;
    checked
      ? setCurrFavDessert((prevVal) => [...prevVal, value])
      : setCurrFavDessert((prevValue) =>
          prevValue.filter((dessert) => dessert !== value),
        );
  };
  return (
    <div>
      <label>Choose your favorite dessert: </label>
      <br />
      <input type="checkbox" value="Cake" onChange={handleChangeEvent} />
      Cake
      <br />
      <input type="checkbox" value="Ice Cream" onChange={handleChangeEvent} />
      Ice Cream
      <br />
      <input type="checkbox" value="Pie" onChange={handleChangeEvent} />
      Cake
      <br />
      {currFavDessert.length > 0 && (
        <p>Selected desserts: {currFavDessert.join(", ")}</p>
      )}
    </div>
  );
};

const FavBooks = () => {
  const [currFavBooks, setCurrFavBooks] = useState([]);

  const handleChangeEvent = (event) => {
    const { checked, value } = event.target;
    checked
      ? setCurrFavBooks((prevValue) => [...prevValue, value])
      : setCurrFavBooks((prevVal) =>
          prevVal.filter((books) => books !== value),
        );
  };
  return (
    <div>
      <label>Choose your favorite bool genres:</label>
      <br />
      <input type="checkbox" value="Fiction" onChange={handleChangeEvent} />
      Fiction
      <br />
      <input type="checkbox" value="Mystery" onChange={handleChangeEvent} />
      Mystery
      <br />
      <input type="checkbox" value="Biography" onChange={handleChangeEvent} />
      Biography
      <br />
      {currFavBooks.length > 0 && (
        <p>Selected genres: {currFavBooks.join(", ")}</p>
      )}
    </div>
  );
};
export default function App() {
  return (
    <main>
      <MoviesList />
      <br />
      <FavFruit />
      <br />
      <FavDrinks />
      <br />
      <FavDessert />
      <br />
      <FavBooks />
    </main>
  );
}
