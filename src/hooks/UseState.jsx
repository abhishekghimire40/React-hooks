import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  function increaseCount() {
    setCount(count + 1);
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={increaseCount}
        style={{
          width: "200px",
          height: "50px",
          fontSize: "25px",
          cursor: "pointer",
        }}
      >
        Count
      </button>
      <p style={{ fontSize: "40px" }}>{count}</p>
    </div>
  );
};

export default UseState;
