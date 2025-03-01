import { useEffect, useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  const addToCart = (movie) => {
    setCart([...cart, movie]);
  };
  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem("Cart"))||[])
  },[])
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((item, index)=> (<div className="item">{item.name} ${item.price}</div>))}
      

      <button onClick={() => alert('Temporary not available')}>Checkout</button>
    </div>
  );

}

export default Cart;
