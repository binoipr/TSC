// function showTodo(todo: { title: string; text: string }) {
//   console.log(todo.title + " " + todo.text);
// }

// let myTodo = { title: "Hello", text: "How are you" };

// showTodo(myTodo);
// using interface

interface myTodo {
  title: string;
  text: string;
}

function showTodo(todo: myTodo) {
  console.log(todo.title + " " + todo.text);
}

let hiTodo = { title: "Hello", text: "How you do" };

showTodo(hiTodo);
