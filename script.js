document.querySelector("#add").onclick = function () {
  var inputField = document.querySelector("#newtask input");
  
  if (inputField.value.trim().length === 0) {
    alert("Please enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
      <div class="task">
          <label class="taskCheck">
              <input type="checkbox" class="taskCheckbox">
              <span id="taskname"> 
                  ${inputField.value}
              </span>
          </label>
          <button class="delete">
              <i class="far fa-trash-alt"> </i>
          </button>
      </div>
    `;
    
    inputField.value = "";
    
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
