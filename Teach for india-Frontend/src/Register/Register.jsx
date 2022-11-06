import { Navbar } from "../Navbar/Navbar"
import { useState } from "react";
import "./Register.css";

export const Register=()=>{
    const [lecturedata, setLecturedata] = useState({});
    const [data, setData] = useState({});


    const handleChange = (e) => {
        const { id, value } = e.target;
        setLecturedata({ ...lecturedata, [id]: value });
      };

      const postdata = (e) => {
        e.preventDefault();
        fetch("https://teachforindiaregister.herokuapp.com/register", {
          method: "POST",
          body: JSON.stringify(lecturedata),
          headers: { "content-type": "application/json" },
        })
          .then((Response) => Response.json())
          .then((data) => {
            setData(data);
          });
        if (data) {
          alert("Registration Successfull !");
        }
      };

    return(
        <div>
            <Navbar/>
            <div className="lec">
        <p>Register Here For Volunteer...</p>
      </div>
            <div className="main-admin-div">
        <div className="title-div">
          <p>Full Name</p>
          <input type="text" id="full_name" onChange={handleChange} />
        </div>
        <div className="mid-div">
          <div>
            <p>Age</p>
            <select name="" id="age" onChange={handleChange}>
              <option value="">Choose</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
            </select>
          </div>
          <div>
            <p>Location</p>
           <input type="text" id="location" placeholder="Location" onChange={handleChange} />
          </div>
          <div>
            <p>Phone Number</p>
            <input type="number" id="phone" placeholder="Phone Number" onChange={handleChange} />
          </div>
        </div>
        <div className="mid-div">
          <div>
            <p>Language Known</p>
            <input type="text" placeholder="language" id="spoken_languages" onChange={handleChange} />
          </div>
          <div>
            <p>Availability</p>
            <select name="" id="availability" onChange={handleChange}>
              <option value="">Choose</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>

            </select>
          </div>
        </div>
        <button onClick={postdata}>Add</button>
      </div>
        </div>
    )
}