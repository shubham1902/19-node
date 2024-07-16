export function Todos({ todos }) {
  return todos.map(function (element) {
    console.log(element);
    return (
      <div key={element.title + element.description}>
        <h1>{element.title}</h1>
        <h2>{element.description}</h2>
        <button>
          {element.completed == true ? "completed" : "not completed"}
        </button>
      </div>
    );
  });
}
