import { useParams } from 'react-router-dom';
import Cart from './Cart';
const movies = [{name: "The Monkey", price: 15}, {name: "Heart Eyes", price: 10}, {name: "Captain America", price: 20}, {name: "Scary Movie 6", price: 10},{name: "Far Behind", price: 5}]

function MovieDetails() {
  const { id } = useParams();
  function addtoCart(){
    const cart=JSON.parse(localStorage.getItem("Cart"))||[]
  cart.push(movies[id-1])
  localStorage.setItem('Cart',JSON.stringify(cart))
  }
  return (
    <div>
      <h1>{movies[id-1].name}</h1>
      <p>Details coming soon...</p>
      <button onClick={addtoCart}>
        Add to cart
      </button>
    </div>
  );
}

export default MovieDetails;
