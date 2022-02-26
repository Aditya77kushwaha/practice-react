import React, { useState } from "react";
import axios from "axios";
const TestAPI = () => {
  const [txt, settxt] = useState("");
  const [res, setres] = useState("");
  return (
    <>
      <div className="container">
        <input
          type="text"
          className="form-control"
          value={txt}
          onChange={(e) => settxt(e.target.value)}
        />
        <button
          className="btn btn-sm btn"
          onClick={() => {
            // axios({
            //   method: "post",
            //   url: "http://localhost:9000/new",
            //   data: {
            //     value: txt,
            //   },
            // });
            axios
              .post("http://localhost:9000/new", {
                value: txt,
              })
              .then((res) => {
                  console.log(res);
                setres(res.data.val.value);
              });
          }}
        >
          Send
        </button>
        {res}
      </div>
    </>
  );
};

export default TestAPI;
