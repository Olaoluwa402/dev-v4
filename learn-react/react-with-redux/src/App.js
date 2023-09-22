import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCakeAction } from "./redux/actions/buyCakeAction";
function App() {
  //subsrcibe to store
  const { remainingItem, sold, noOfcakes } = useSelector(
    (state) => state.cakes
  );
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Buy Cake</h2>
      <p>Total Item: {noOfcakes}</p>
      <p>Remaining Item: {remainingItem}</p>
      <p>Sold: {sold}</p>
      <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
      <button onClick={() => dispatch(buyCakeAction(+qty))}>Buy Now</button>
    </div>
  );
}

export default App;
