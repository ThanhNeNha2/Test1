import React from "react";

export default function AddTodo(props) {
  const { giatriinput, setnamehander } = props;

  return (
    <div>
      <span>Xin chào mình tên là võ chí Thanh</span> <br />
      <br /> <label> Name</label>
      <input
        type="text"
        onChange={(e) => {
          giatriinput(e);
        }}
      />
      <button
        onClick={() => {
          setnamehander();
        }}
      >
        CLick me!
      </button>
      <br></br>
    </div>
  );
}
