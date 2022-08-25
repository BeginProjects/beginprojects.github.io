let task = document.querySelector("#input-field")
let newTask = document.querySelector("#tasks-list")

function add_task(){
  taskListItem = document.createElement("li")
  taskListItem.textContent = task.value
  newTask.append(taskListItem)
}
