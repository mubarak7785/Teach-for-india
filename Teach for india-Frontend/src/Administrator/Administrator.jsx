import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";
import "./Administrator.css";
export const Administrator = () => {
  const [data, setData] = useState([]);

  fetch("https://teachforindiaregister.herokuapp.com/register")
    .then((res) => res.json())
    .then((data) => setData(data));

  return (
    <div>
      tttt
      <Navbar />
      <div className="adminis-div">
        <div className="head">
          <p>Name</p>
          <p>Age</p>
          <p>Phone-No</p>
          <p>Location</p>
          <p>Language</p>
          <p>Day</p>
        </div>
        {data.map((e) => {
          return (
            <div className="head">
              <p>{e.full_name}</p>
              <p>{e.age}</p>
              <p>{e.phone}</p>
              <p>{e.location}</p>
              <p>{e.spoken_languages}</p>
              <p>{e.availability}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
