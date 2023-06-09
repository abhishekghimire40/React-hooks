import { useState, useReducer } from "react";

/*
=====simple component with multiple state using useState ====
It has a simple button that increases the counter and toggles the text on and off 
*/

/**
const UseReducer = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
        style={{
          width: "200px",
          height: "50px",
          fontSize: "25px",
          cursor: "pointer",
        }}
      >
        Click here
      </button>
      {showText && <p>This is a text</p>}
    </div>
  );
};
*/

//======== Now lets refactor this component using useReducer===============
/*
if we want to manipulate multiple state in single event we can use useReducer
in this type of case.
Above case is same we want to increase Counter as well as we want to toggle
the text using single click event.
As a whole, if we want to manage complex state logics then we can use useReducer hook
*/

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "TOGGLETEXT":
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

const UseReducer = () => {
  // ====NOTE====
  /**
   * useReducer take a function as first arguement takes a state and an action,
     and returns a new state value based on the action.
   * The second arguement is the initial state value
   * useReducer returns a array with initial state value and a dispatch function where
     we can pass out action i.e. based on which we can modify our states
     
  */
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLETEXT" });
        }}
        style={{
          width: "200px",
          height: "50px",
          fontSize: "25px",
          cursor: "pointer",
        }}
      >
        Click here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default UseReducer;
