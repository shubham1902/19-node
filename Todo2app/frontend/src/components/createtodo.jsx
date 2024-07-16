import { set } from "mongoose";
import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        style={{ margin: "10px", padding: "10px" }}
        type="text"
        id="title"
        placeholder="title"
        onChange={(e) => {
          console.log(e.target.value);
          setTitle(e.target.value);
        }}
      />
      <input
        style={{
          margin: "10px",
          padding: "10px",
        }}
        type="text"
        id="description"
        placeholder="description"
        onChange={(e) => {
          console.log(e.target.value);
          setDescription(e.target.value);
        }}
      />
      <button
        style={{
          margin: "10px",
          padding: "10px",
        }}
        onClick={async () => {
          await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
              Comleted: false,
            }),
          }).then(function (res) {
            //console.log(res);
            document.querySelector("input").value = "";
            document.querySelector("#description").value = "";
          });
          setTitle("");
          setDescription("");
        }}
      >
        Add a Todo
      </button>
    </div>
  );
}
