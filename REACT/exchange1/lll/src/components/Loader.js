import React from "react";

// Gif
import spinner from "../gif/spinner.gif";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={spinner} alt="Loader" />
      <h2>Loading. . .</h2>
    </div>
  );
};

export default Loader;
