import React, { useState, useEffect } from "react";
import axios from "axios";
import ListComponent from "../../../list-item/ListComponent";

function DashStaff() {
  const [staffs, setrep] = useState([]);

  useEffect(() => {
    const url = "http://localhost:4000/posts";
    // console.log(url);
    const getStaffReport = async () => {
      return axios
        .get(url)
        .then((e) => {
          setrep(e.data);
          // console.log(e.data);
        })
        .catch((err) => console.log(err.message));
    };
    getStaffReport();
  }, []);

  console.log(staffs);
  return (
    <div>
      <h1 className="text-center">Dash Staff</h1>
      <br />
      <ul>
        {staffs.map((item) => (
          <ListComponent key={item.id}>
            <p>{item.title}</p>
            <p>{item.author}</p>
          </ListComponent>
        ))}
      </ul>
    </div>
  );
}

export default DashStaff;
