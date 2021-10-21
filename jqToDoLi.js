// console.log("start");
// adding
let i = 0;
let taskArr = [
  { task: "rest", finished: false },
  { task: "sleep", finished: false },
  { task: "code", finished: false },
];

const ren = () => {
  $("#mainList").html("");
  for (let i = 0; i < taskArr.length; i++) {
    $("#mainList").append(
      `<li> ${taskArr[i].task} <button id = "delTask" onclick = "deleteTask(${i})">Delete</button> <button id = "updateTask" onclick = "updateTask(${i})">Update</button></li>`
    );
  }
};
ren();

const addingTask = () => {
  const newTask = $("#tasksIn").val();
  const obj = { task: newTask, finished: false };
  taskArr.push(obj);
  ren();
};

$("#addBtn").click(addingTask);

// deleting button
const deleteTask = (tasksIndex) => {
  taskArr = taskArr.filter((task, i) => {
    if (taskIndex !== index) {
      return task;
    }
  });
  ren();
};

//update
const updateTask = (tasksIndex) => {
  taskArr.forEach((task, i) => {
    if (taskIndex === i) {
      $();
    }
  });
};

// $("#clearList").click();

const tasksCounter = () => {
  let countArr = taskArr.filter((index) => {
    return index.finished == false;
  });
  $("#taskCounter").text(countArr.length);
};
