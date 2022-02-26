import React, { useState } from "react";
// import io from "socket.io-client";

const Test = () => {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState([]);
  //   const socket = io("http://localhost:5000");
  return (
    <div>
      {texts.map((x) => {
        return <p>{x}</p>;
      })}
      <input onChange={(e) => setText(e.target.value)} value={text} />
      <button
        onClick={() => {
          setTexts((prevState) => [...prevState, text]);
          setText("");
          //   console.log(texts);
        }}
      >
        Send
      </button>
    </div>
  );
};

export default Test;
