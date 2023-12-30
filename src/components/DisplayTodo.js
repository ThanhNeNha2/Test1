import React from "react";

export default function DisplayTodo(props) {
  const list = props.list;
  const deletetodo = props.deletetodo;
  return (
    <div>
      {" "}
      <h3> ------- Todo List -------</h3>
      {list.map((item, id) => {
        return (
          <div style={{ display: "flex", marginLeft: "16px" }}>
            <li key={id}>{item.name} </li>
            <button
              onClick={() => {
                deletetodo(item);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
