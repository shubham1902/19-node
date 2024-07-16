import { DATE } from "mysql/lib/protocol/constants/types";

export function Todos({ todos }) {
  return todos.map(function (element) {
    return (
      <div key={element._id} data-id={element._id}>
        <h1>{element.title}</h1>
        <h2>{element.description}</h2>
        <button
          onClick={async function (e) {
            const id = e.target.closest("div").dataset.id;
            console.log(id);
            await fetch(`http://localhost:3000/completed`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: id,
              }),
            });
          }}
        >
          {element.completed == true ? "completed" : "not completed"}
        </button>
      </div>
    );
  });
}
