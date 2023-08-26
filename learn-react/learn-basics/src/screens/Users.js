import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const users = [
    { id: 1, name: "john" },
    { id: 2, name: "Dayo" },
  ];
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <h2 key={user.id}>
          <Link to={`/dashboard/users/${user.id}`}>{user.name}</Link>
        </h2>
      ))}
    </div>
  );
};

export default Users;
