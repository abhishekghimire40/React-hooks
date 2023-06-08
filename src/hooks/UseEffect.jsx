import axios from "axios";
import { useState, useEffect } from "react";

const UseEffect = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  /*
    ===== useEffect hook=====
    => useEffect hook is just a function which will be called when page/component
       re-renders
      * it takes two arguements
        1. a callback function inside which we write what we want to do  
        2. a dependency array which generally contains state variable
      # so every time a state present in the dependency array changes the useEffect 
        hook will be called
      # if we donot pass the second arguement i.e. dependency array the the useEffect hook 
        will run every time our page/component re-renders
      # if we provide empty dependency array as second arguement then useEffect function will
        only be called once when the component is rendered first time
    => useEffect hook is generally use to perform side effects in the functional components
       like fetching data from an API, subscribing to events, or manipulating the DOM
    => the return statement of useState hook is generally a cleanup function which will 
       be ran when the component is unmounted through which we can free up resources
    => It's like saying, "Hey React, please do something after this component has rendered
       or when these values have changed."
  */

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => setData(response.data[0].email));
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello world</h1>
      <h2>{data}</h2>
      <h2>{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        style={{
          width: "200px",
          height: "50px",
          fontSize: "25px",
          cursor: "pointer",
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default UseEffect;
