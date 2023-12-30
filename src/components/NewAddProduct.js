import React from "react";
import { useState } from "react";
export default function NewAddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");
  const [check, setcheck] = useState(false);
  const handerClickbtn = () => {
    const object = {
      name,
      price,
      size,
      color,
    };

    let productcheck = localStorage.getItem("product");
    if (productcheck) {
      let arr = JSON.parse(productcheck);
      arr.push(object);
      localStorage.setItem("product", JSON.stringify(arr));
    } else {
      localStorage.setItem("product", JSON.stringify([object]));
    }
    setName("");
    setPrice(0);
    setSize(0);
    setColor("");
  };

  const statuspro = () => {
    setcheck(!check);
  };

  return (
    <div className="newadd-product">
      <button
        onClick={() => {
          statuspro();
        }}
      >
        {check ? "Hide Object" : "Show Object"}
      </button>

      {check ? (
        <fieldset>
          <legend>New Add Product:</legend>
          <p>Name :</p>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <p>Price :</p>
          <input
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <p>Size :</p>
          <input
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
          <p>Color :</p>
          <input
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <div>
            <button
              onClick={() => {
                handerClickbtn();
              }}
            >
              Add new !{" "}
            </button>
          </div>
        </fieldset>
      ) : (
        ""
      )}
    </div>
  );
}
