import React, { useEffect, useState } from "react";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { sendClick } from "../../utils";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Get the client ID from local storage
    const clientId = getClientId();
    // console.log("client id", clientId);
  }, []);

  const getClientId = () => {
    // Check if the client has a unique ID stored in local storage
    let id = window.localStorage.getItem("clientId");
    // If not, generate a new one and store it in local storage
    if (!id) {
      id = uuidv4();
      window.localStorage.setItem("clientId", id);
    }
    return id;
  };

  const handleClick = async () => {
    // setCount((count) => count + 1);
    console.log("clicked");
    const res = await sendClick({ id: getClientId() });
    console.log(res.message);
  };
  return (
    <div className="Home">
      <h1>Pre Order Now!</h1>
      <h1>Home</h1>
      <div>Join the Mailing List below!</div>
      <input type="text" placeholder="Enter your email" />
      <button onClick={handleClick}>Submit</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
};

export default Home;
