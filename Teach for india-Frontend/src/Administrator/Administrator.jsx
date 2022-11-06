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
            <div><p>Name</p></div>
            <div> <p>Age</p></div>
            <div><p>Phone-No</p></div>
            <div> <p>Location</p></div>
            <div> <p>Language</p></div>
            <div><p>Day</p></div> 
        </div>
        {data.map((e) => {
          return (
            <div className="head">
                <div> <p>{e.full_name}</p></div>
                <div> <p>{e.age}</p></div>
                <div> <p>{e.phone}</p></div>
                <div><p> {e.location}</p></div>
                <div><p>{e.spoken_languages}</p></div>
                <div><p>{e.availability}</p></div>
             
           
              
              
            </div>
          );
        })}
      </div>
    </div>
  );
};
