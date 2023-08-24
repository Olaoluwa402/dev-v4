import React, { useState } from "react";

const Conditional = () => {
  const [user, setUser] = useState({});

  const addUser = () => {
    const roles = ["admin", "vendor", "user"];
    const index = Math.ceil(Math.random() * roles.length);
    console.log(index);
    const data = {
      email: `user-${Math.ceil(Math.random() * 100)}`,
      role: roles[index - 1],
    };
    setUser(data);
  };
  //   /*IF/ELSE */
  //   if (user && user.role === "admin") {
  //     return <h2>Welcome back {user.role}</h2>;
  //   } else {
  //     return <h2>Welcome back Guest</h2>;
  //   }

  //   //ternary operator
  //   return (
  //     <div>
  //       {user && user.role === "admin" ? (
  //         <h2>Welcome back {user.role}</h2>
  //       ) : (
  //         <h2>Welcome back Guest</h2>
  //       )}
  //     </div>
  //   );

  //   //using variables
  //   let dashborad;
  //   if (user && user.rolev === "admin") {
  //     dashborad = <h2>Welcome back {user.role}</h2>;
  //   } else {
  //     dashborad = <h2>Welcome back Guest</h2>;
  //   }

  //   return dashborad;

  const { role } = user;
  switch (role) {
    case "admin":
      return (
        <div>
          <h2>Welcome back {user.role}</h2>
          <button onClick={addUser}>Login</button>
        </div>
      );
    case "vendor":
      return (
        <div>
          <h2>Welcome back {user.role}</h2>
          <button onClick={addUser}>Login</button>
        </div>
      );
    case "user":
      return (
        <div>
          <h2>Welcome back {user.role}</h2>
          <button onClick={addUser}>Login</button>
        </div>
      );
    default:
      return (
        <div>
          <h2>Welcome back Guest</h2>
          <button onClick={addUser}>Login</button>
        </div>
      );
  }

  // //   short circuit
  //   return (
  //     <div>
  //       {user && user.role === "admin" && <h2>Welcome back {user.role}</h2>}
  //     </div>
  //   );
};

export default Conditional;
