import React from "react";
import { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";
export default function Home() {
  const [name, setname] = useState("");

  const [list, setList] = useState([
    {
      id: "1",
      name: " VO CHI THANH",
    },
    {
      id: "2",
      name: "VO CHI THONG ",
    },
    {
      id: "3",
      name: "LE THI LE",
    },
    {
      id: "4",
      name: "VO VAN HIEP",
    },
  ]);
  const giatriinput = (e) => {
    setname(e.target.value);
  };
  const setnamehander = () => {
    const nametodo = {
      id: Math.floor(Math.random() * 10000),
      name: name,
    };

    const dstodo = _.clone(list);
    dstodo.push(nametodo);
    setList(dstodo);
    setname("");
    // cách 2
    // setList([...list, nametodo]);
  };

  const deletetodo = (todo) => {
    let newtodo = list.filter((item) => item.id !== todo.id);
    setList(newtodo);
  };

  return (
    <div>
      <AddTodo giatriinput={giatriinput} setnamehander={setnamehander} />
      <DisplayTodo list={list} deletetodo={deletetodo} />
    </div>
  );
}
