let todos = [
    { title: "Title 1", date: new Date(), id: 1 , description:"I want to drive a car",  isCompleted: false },
    { title: "Title 2", date: new Date(), id: 2 , description:"I want to buy a house", isCompleted: false },
    { title: "Title 3", date: new Date(), id: 3 , description:"I want to do some chores", isCompleted: false },
  ];
  
  document.getElementById("create-todo").addEventListener("click", createTodo);
  document.getElementById("read-todos").addEventListener("click", readTodos);
  document.getElementById("update-todo").addEventListener("click", updateTodo);
  document.getElementById("delete-todo").addEventListener("click", deleteTodo);
  document.getElementById("show-table").addEventListener("click", showTable);
  
  function createTodo() {
    const newTodo = { title: document.getElementById("title").value, date: document.getElementById("date").value, id: todos.length+1, description: document.getElementById("description").value , isCompleted: false };
    todos.push(newTodo);
    console.log(todos);
  }
  
  function readTodos() {
    console.log(todos);
  }
  
  function updateTodo() {
    const todoToUpdate = todos.find((todo) => todo.title === "Title 2");
    todoToUpdate.isCompleted = true;
    console.log(todos);
  }
  
  function deleteTodo() {
    const todoToDelete = todos.find((todo) => todo.title === "Title 3");
    const index = todos.indexOf(todoToDelete);
    todos.splice(index, 1);
    console.log(todos);
  }
  
  function showTable() {
    
    const todoList = document.getElementById("todo-list");
    todos.forEach((todo) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${todos.title}</td>
        <td>${todos.date}</td>
        <td>${todos.id}</td>
        <td>${(todos.description)}</td>
      <td>${todo.isCompleted ? "Yes" : "No"}</td>
      `;
      todoList.appendChild(row);
    });
  }