import React, { useState } from "react";

export class ClassState extends React.Component {
  constructor() {
    super();
    // internal state in class component
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    // this.setState((prev) => ({
    //   isLoggedIn: !prev.isLoggedIn,
    // }));
    return (
      <div>
        {this.state.isLoggedIn ? <Dashboard /> : <Login />}
        <button
          onClick={(e) =>
            this.setState((prev) => ({
              isLoggedIn: !prev.isLoggedIn,
            }))
          }
        >
          change state
        </button>
      </div>
    );
  }
}

export const Login = () => {
  return <div>Login</div>;
};

export const Dashboard = () => {
  return <div>Dashboard</div>;
};

export const StateManagementHook = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? "you are looged in" : "not logged in"}
      <button onClick={(e) => setIsLoggedIn((prev) => !prev)}>
        change state
      </button>
    </div>
  );
};
