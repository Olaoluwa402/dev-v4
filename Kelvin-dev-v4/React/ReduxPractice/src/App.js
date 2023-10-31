import "./App.css";
// import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUserAction } from "./components/Redux/Actions/createUserAction";

function App() {
  const dispatch = useDispatch();
  const { createUser } = useSelector((state) => state);
  const { loading, success: createUserSuccess, user, error } = createUser;
  return (
    <div className="App">
      <h1>Hello</h1>
      <div>
        {loading && <h2>Loading.....</h2>}
        {error && <h2>Error:{error}</h2>}
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
