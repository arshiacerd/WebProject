import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("users");
    if (auth) {
      navigate("/home");
    }
  }, []);
  const [username, setUsername] = useState("");
  const [email, seetEmail] = useState("");
  const [pass, setPass] = useState("");
  const [city, setCity] = useState("");

  const [val, setVal] = useState({
    username: "",
    email: "",
    pass: "",
    city: "",
  });
  const sendSignUP = async () => {
    let sendData = await fetch("http://localhost:4200/", {
      method: "post",
      //   body: JSON.stringify(val.username,val.email,val.pass,val.city),
      body: JSON.stringify({ username, email, pass, city }),

      headers: {
        "Content-Type": "application/json",
      },
    });
    sendData = await sendData.json();
    console.log(sendData);
    localStorage.setItem("users", JSON.stringify(sendData));
   
        navigate("/home");
      
  };
  const getData = (e) => {
    if (e.target.name === "username") {
      setVal((preVal) => {
        return {
          username: e.target.value,
          email: preVal.email,
          pass: preVal.pass,
          city: preVal.city,
        };
      });
    } else if (e.target.name === "email") {
      setVal((preVal) => {
        return {
          email: e.target.value,
          username: preVal.username,
          pass: preVal.pass,
          city: preVal.city,
        };
      });
    }
    if (e.target.name === "pass") {
      setVal((preVal) => {
        return {
          pass: e.target.value,
          email: preVal.email,
          username: preVal.username,
          city: preVal.city,
        };
      });
    }
    if (e.target.name === "city") {
      setVal((preVal) => {
        return {
          city: e.target.value,
          email: preVal.email,
          pass: preVal.pass,
          username: preVal.username,
        };
      });
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="grid-container">
          <h2>Please Create an account</h2>

          <input
            type="text"
            placeholder="Username"
            // onChange={getData}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
          />
          <input
            type="email"
            placeholder="email"
            // onChange={getData}
            onChange={(e) => seetEmail(e.target.value)}
            name="email"
          />
          <input
            type="password"
            placeholder="password"
            name="pass"
            // onChange={getData}
            onChange={(e) => setPass(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            name="city"
            // onChange={getData}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={sendSignUP}>Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
