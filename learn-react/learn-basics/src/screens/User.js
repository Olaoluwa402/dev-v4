import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export const User = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  console.log(id, "id");

  const users = [
    { id: 1, name: "john" },
    { id: 2, name: "Dayo" },
  ];

  useEffect(() => {
    if ((id && !currentUser) || (id && currentUser && currentUser.id !== id)) {
      const foundUser = users.find((user) => user.id === +id);
      setCurrentUser(foundUser);
    }
    // asynSample();
    //clean up
    // eslint-disable-next-line
  }, []);

  // const asynSample = async () => {
  //   try {
  //     const posts = await axios.get("localhost:3004/post");
  //     setPosts(posts);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  function countFiveTimes() {
    for (let i = 0; i < 5; i++) {
      setCount((prev) => prev + 1);
    }

    setList([...list, count]);
  }

  return (
    <>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h2>User</h2>
      <p>ID:{currentUser?.id ?? ""}</p>
      <p>Name:{currentUser?.name ?? ""}</p>
      <div style={{ display: "flex", flexDirection: "column" }}>
        Count {count}
        <button
          onClick={() => {
            setCount(0);
            setList([]);
          }}
        >
          Reset
        </button>
        <button onClick={() => setCount((prev) => setCount(prev + 1))}>
          Increment
        </button>
        <button onClick={() => setCount((prev) => setCount(prev - 1))}>
          Decrement
        </button>
        <button onClick={countFiveTimes}>Increment 5X</button>
      </div>
    </>
  );
};

export default User;
