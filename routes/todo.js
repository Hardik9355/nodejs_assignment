const express = require("express");
const router = express.Router();
const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
}= require("../controllers/todo")
router.get("/");
router.post("/");
router.put("/");
router.delete("/:id");
router.delete("/:id");
module.exports = router;


