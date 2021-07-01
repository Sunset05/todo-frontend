const todosUrl = "http://localhost:3000/todos/"

export function patchTodo(todo){
  fetch(todosUrl + todo.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ todo })
  })
}

export function postTodo(todo){
  fetch(todosUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ todo })
  })
}

export function deleteTodo(id){
  fetch(fetch(todosUrl + id, { method: "DELETE" }))
}