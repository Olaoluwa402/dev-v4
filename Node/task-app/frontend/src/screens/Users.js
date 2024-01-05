import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAction } from "../redux/actions/userAction";

export const Users = () => {
  const { users } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAction());
  }, []);

  return (
    <div>
      <h2>Users</h2>
      {users.length > 0 ? (
        users.map((user) => (
          <h2 key={user._id}>
            {/* params route */}
            <Link to={`/dashboard/users/${user._id}`}>{user.firstName}</Link>
            {/* query string route */}
            {/* <Link to={`/dashboard/users?id=${user.id}&&name=${user.name}`}>
            {user.name}
          </Link> */}
          </h2>
        ))
      ) : (
        <h4>No Users Yet</h4>
      )}
    </div>
  );
};

export default Users;
