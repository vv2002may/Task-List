let addtask = document.querySelector('button');
let taskContainer = document.querySelector('#task-container');
let inputTask = document.querySelector('#input-task');

addtask.addEventListener('click', function () {
   let task = document.createElement('div');
   task.classList.add('task');

   let li = document.createElement('li');
   li.innerText = `${inputTask.value}`;
   task.appendChild(li);

   let checkButton = document.createElement('button');
   checkButton.innerText = '✔';
   checkButton.classList.add('check-task');
   task.appendChild(checkButton);

   let deleteButton = document.createElement('button');
   deleteButton.innerText = '␥';
   deleteButton.classList.add('delete-task');
   task.appendChild(deleteButton);

   if (inputTask.value == "")
      alert("Please Enter a Task!");
   else {
      taskContainer.appendChild(task);
      inputTask.value = "";
   }
   let check = 'no';
   checkButton.addEventListener('click', function () {
      if(check=='no')
      {
         li.style.textDecoration = 'line-through';
         check = 'yes';
      }
      else
      {
         li.style.textDecoration='none';
         check = 'no';
      }
   })
   deleteButton.addEventListener('click', function () {
      task.remove();
   })
});