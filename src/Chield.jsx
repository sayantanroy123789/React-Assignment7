import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
function Chield() {
  const [mDown, setMDown] = useState();
  const handlemdown = (e) => {
    setMDown(e.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          height: "70vh",
          width: "70vw",
          backgroundColor: "greenyellow",
          display: "flex",
        }}
      >
        <div style={{ height: "100%", width: "50%", backgroundColor: "black" }}>
          <textarea
            onChange={handlemdown}
            style={{ height: "100%", width: "100%" }}
          ></textarea>
        </div>
        <div
          style={{ height: "100%", width: "50%", backgroundColor: "#87807D" }}
        >
          <ReactMarkdown>{mDown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default Chield;
