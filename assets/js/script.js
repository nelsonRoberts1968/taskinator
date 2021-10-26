var formEl = document.querySelector("#task-form");
console.log(buttonEl);


formEl.addEventListener("submit", createTaskHandler); {
    alert("button clicked");
  }

  var createTaskHandler = function(event) {

    event.preventDefault();
  
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  };