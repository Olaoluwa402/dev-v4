import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {buyCakeAction} from "./redux/actions/BuyCakeAction";

function App() {

  const {itemsRemaining, sold, noOfCakes} = useSelector((state) => state.cakes)
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  return (
    <div className= "container">
      <h2>Buy Cake</h2>
      <p>Total Item: {noOfCakes}</p>
      <p>Remaining Item: {itemsRemaining}</p>
      <p>Sold: {sold}</p>
      <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
      <button onClick={() => dispatch(buyCakeAction(+qty))}>Buy Now</button>
    </div>
  );
}

export default App;
