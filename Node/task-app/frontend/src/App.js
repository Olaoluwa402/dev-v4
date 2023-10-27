import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCakeAction } from "./redux/actions/buyCakeAction";
import { createUserAction } from "./redux/actions/userAction";
import { CREATE_USER_RESET } from "./redux/constants";

function App() {
  const dispatch = useDispatch();
  //subsrcibe to store
  const { cakes, createUser } = useSelector((state) => state);
  const { remainingItem, sold, noOfcakes } = cakes;

  const { loading, success: createUserSuccess, user, error } = createUser;
  const [qty, setQty] = useState(1);

  // useEffect(() => {
  //   if (createUserSuccess) {
  //     dispatch({ type: CREATE_USER_RESET });
  //     //redirect user to login page
  //   }
  // }, [dispatch, createUserSuccess]);

  return (
    <div className="App">
      <h2>Buy Cake</h2>
      <p>Total Item: {noOfcakes}</p>
      <p>Remaining Item: {remainingItem}</p>
      <p>Sold: {sold}</p>
      <input type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
      <button onClick={() => dispatch(buyCakeAction(+qty))}>Buy Now</button>

      <div style={{ margin: "100px 0" }}>
        {loading && <h2>Loading.....</h2>}
        {error && <h2 style={{ color: "brown" }}>Error:{error}</h2>}
        {user && (
          <>
            <p>Username:{user.username}</p>
            <p>Email:{user.email}</p>
          </>
        )}
        click the button to create user
        <button
          onClick={() =>
            dispatch(
              createUserAction({
                username: "john Doe",
                email: "johndoe@gmail.com",
                password: "12345",
              })
            )
          }
        >
          Create User
        </button>
      </div>
    </div>
  );
}

export default App;
