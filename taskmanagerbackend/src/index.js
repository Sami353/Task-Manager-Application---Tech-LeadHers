import cors from "cors";
import express from "express";
import taskController from "./controllers/taskController.js";
import connectToMongoDB from "./config/db.js";

const app = express();
const port = 8080;

app.use(cors());
app.set("port", port);
app.use(express.json());

connectToMongoDB();

app.get("/taskmanager", (req, res) => {
    res.send("Hello World!")
}); 

app.use("/api/tasks", taskController);

app.listen(port, () => {
    console.log(`REST API application is running on port ${port}.`)
});