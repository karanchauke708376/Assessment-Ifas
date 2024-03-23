
const express = require("express");
const router = express.Router();

// import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo , getTodoById } = require("../controllers/getTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");


// Define API Create Routes , create, update , delete , etc 

router.post("/createTodo" , createTodo); // path ko controller se map kiya hai
router.get("/getTodo" , getTodo);
router.get("/getTodo/:id" , getTodoById);
router.put("/updateTodo/:id" , updateTodo);
router.delete("/deleteTodo/:id" , deleteTodo);

module.exports = router;


