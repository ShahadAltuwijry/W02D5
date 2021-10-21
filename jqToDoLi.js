// console.log("start");
// adding
let i = 0;
let taskArr = [
  { task: "rest", finished: false },
  { task: "sleep", finished: true },
];

const ren = () => {
  $("#mainList").html("");
  for (let i = 0; i < taskArr.length; i++) {
    $("#mainList").append(
      `<li> ${taskArr[i].task} <button id = "delTask">Delete</button> <button id = "editTask">edit</button></li>`
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

// $("#clearList").click();
