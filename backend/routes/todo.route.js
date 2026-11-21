import express from "express";
import { createTodo, getTodos, updateTodo, deleteTodo } from "../controller/todo.controller.js";
// import { getTodos } from "../controller/todo.controller.js";

const router = express.Router();

// create
router.post("/createTodo", createTodo);

//get all todos
router.get("/getTodos", getTodos);

//update a todo
router.put("/updateTodo/:id", updateTodo);

//delete a todo
router.delete("/deleteTodo/:id", deleteTodo);

export default router;

