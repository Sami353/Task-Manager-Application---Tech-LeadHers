import Task from "../models/tasks.js";
import { Router } from "express";

const taskController = Router();

const tasks = [
  {
    id: 100,
    name: "Hiking",
    completed: false,
    date: "2024/12/12",
  },
  {
    id: 101,
    name: "Practice coding",
    completed: true,
    date: "2024/12/12",
  },
];

taskController.post("/create", async (req, res) => {
  const data = req.body;

  if (data.name === "") {
    res.status(400).json({
      message: "Name cannot be empty.",
    });
  }

  const task = new Task({
    title: data.title,
    description: data.description,
  });

  try {
    await task.save();
    console.log("Task Created.");

    res.status(200).json({
      message: "Task created!",
    });
  } catch (err) {
    console.error("Task not created.");

    res.status(500).json({
      message: "Task is not created!",
    });
  }
});

taskController.get("/list", async (req, res) => {
  try {
    const tasks = await Task.find({ isDeleted: false }).sort({ createdAt: -1 });

    res.status(200).json({ tasks });
  } catch (err) {
    console.error("task fetching failed: ", err);

    res.status(500).json({
      message: "Error fetching tasks",
    });
  }
});

// taskController.get("/find/:id", (req, res) => {
//   const { id } = req.params;
//   const taskId = parseInt(id);

//   const task = tasks.find((task) => {
//     return task.id === taskId;
//   });

//   if (!task) {
//     res.status(404).json({
//       message: `Task with id ${taskId} is not found.`,
//     });
//   }

//   res.status(200).json({
//     task,
//   });
// });

taskController.get("/find/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const tasks = await Task.findOne({ _id:id });

    res.status(200).json({ tasks });
  } catch (err) {
    console.error("task fetching failed: ", err);

    res.status(500).json({
      message: "Error fetching tasks",
    });
  }
});

// taskController.delete("/delete/:id", (req, res) => {
//   const { id } = req.params;
//   const taskId = parseInt(id);

//   const task = tasks.find((task) => {
//     return task.id === taskId;
//   });

//   if (task === -1) {
//     return res.status(404).json({
//       message: `Task with id ${taskId} is not found.`,
//     });
//   }

//   tasks.splice(task, 1);
//   res.status(200).json({
//     message: `Task with id ${taskId} has been deleted.`,
//   });

// });

taskController.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    await Task.updateOne({ _id:id }, {$set: {isDeleted: true}});

    res.status(200).json({ 
      message: "Task deleted with id " + id
     });
  } catch (err) {
    console.error("An error occurred while deleting the task: ", err);

    res.status(500).json({
      error: "An error occurred while deleting the task.",
    });
  }

});

taskController.put("/edit/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  
  try {
    const updateTask = await Task.updateOne({_id : id}, data);

    res.status(200).json({ 
      message: "Task edited with id " + id
     });
  } catch (err) {
    console.error("An error occurred while editing the task: ", err);

    res.status(500).json({
      error: "An error occurred while editing the task.",
    });
  }

});

export default taskController;
