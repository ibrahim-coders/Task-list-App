const form = document.getElementById('task-form');
const submit = document.getElementById('submit');
const taskInput = document.getElementById('task-input');
const taskListDiv = document.getElementById('task-list');

function createTask() {
  const inputValue = taskInput.value;
  if (inputValue) {
    console.log(inputValue);
  } else {
    alert('Please insert a task!');
  }
  taskInput.value = '';
  const listDiv = document.createElement('div');
  listDiv.classList.add('tasks');
  // createTaskList(inputValue);
  //crecating a task input

  const taskName = document.createElement('input');
  taskName.value = inputValue;

  taskName.classList.add('w-[65%]');
  taskName.setAttribute('readonly', 'readonly');

  // create button div

  const btnDiv = document.createElement('div');
  btnDiv.classList.add('w-[35%]');

  const creactDeleteBtn = document.createElement('button');
  creactDeleteBtn.innerHTML = 'Delete';
  creactDeleteBtn.classList.add('delete');

  const creactEditBtn = document.createElement('button');
  creactEditBtn.innerHTML = 'Edit';
  creactEditBtn.classList.add('edit');

  btnDiv.appendChild(creactDeleteBtn);
  btnDiv.appendChild(creactEditBtn);

  listDiv.appendChild(taskName);
  listDiv.appendChild(btnDiv);
  taskListDiv.appendChild(listDiv);

  // delete a task

  creactDeleteBtn.addEventListener('click', Event => {
    // event.target.parentElement.parentElement.remove();
    // console.log(event.target.parentElement.appendChild(1));

    listDiv.remove();
  });


  creactEditBtn.addEventListener('click', e => {
  
    if (e.target.innerText === 'Edit') {
      taskName.removeAttribute('readonly');
      // taskName.focus('border-blue-600');
      creactEditBtn.innerText = 'Save';

    } else {
      creactEditBtn.innerText = 'Edit';
      taskName.setAttribute('readonly', 'readonly');
    };

  });


};

submit.addEventListener('click', createTask);

// function createTaskList(inputValue) {
//   taskListDiv.innerHTML += `
//    <div class="task p-2 flex items-center justify-between broder-[1px] border-gray-200 rounded-lg">

//         <p class="text-md ">${inputValue}</p>

//         <div>
//           <button class="bg-red-600 p-2 rounded-md text-white">Delete</button>
//           <button class="bg-green-600 p-2 rounded-md text-white">Edit</button>
//         </div>
//       </div>

//   `;
// }

// const form = document.getElementById('task-form');
// const submit = document.getElementById('submit');
// const taskInput = document.getElementById('task-input');
// const taskList = document.getElementById('task-list'); // Change this ID

// function createTask() {
//   const inputValue = taskInput.value;
//   if (inputValue) {
//     console.log(inputValue);
//     createTaskList(inputValue);
//   } else {
//     alert('Please insert a task!');
//   }
//   taskInput.value = '';
// }

// function createTaskList(task) {
//   const listItem = document.createElement('p');
//   listItem.textContent = task;
//   taskList.appendChild(listItem);
// }

// submit.addEventListener('click', createTask);
