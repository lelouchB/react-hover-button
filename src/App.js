import React, { useState } from "react";

function App() {
  const [bg, setBg] = useState("white");

  const back = {
    background: `${bg}`,
    height: "100vh",
    display:"flexbox",

  };

  const styleB = {
    width: "100px",
    fontSize: "20px",
    borderRadius: "40px",
    border: "1px solid black",
    color: "white",
    margin: "0.5em 1em",
    padding: "0.25em 1em",
    background: "#1D499B",
  };
  const styleR = {
    width: "100px",
    fontSize: "20px",
    borderRadius: "40px",
    border: "1px solid black",
    color: "#fafafa",
    margin: "0.5em 1em",
    padding: "0.25em 1em",
    background: "#c83f49",
  };
  const styleY = {
    width: "100px",
    fontSize: "20px",
    borderRadius: "40px",
    border: "1px solid black",
    color: "black",
    margin: "0.5em 1em",
    padding: "0.25em 1em",
    background: "#F9D648",
  };

  const handleHover = (color) => {
    setBg(color);
  };
  return (
    <div style={back}>
      {/* <Button> White</Button> */}
      <button
        className="primary"
        style={styleB}
        onMouseEnter={() => handleHover("#1D499B")}
        onMouseLeave={() => handleHover("white")}
      >
        {" "}
        Blue
      </button>

      <button
        className="primary"
        style={styleR}
        onMouseEnter={() => handleHover("#c83f49")}
        onMouseLeave={() => handleHover("white")}
      >
        {" "}
        Red
      </button>
      <button
        className="primary"
        style={styleY}
        onMouseEnter={() => handleHover("#F9D648")}
        onMouseLeave={() => handleHover("white")}
      >
        {" "}
        Yellow
      </button>
    </div>
  );
}

export default App;
