// Import Model
const { request, response } = require("express");
const Todo = require("../models/Todo");
const { param } = require("../routes/todos");

// Default Route Handle
exports.deleteTodo = async(request, response) => {
    try {

        const {id} = request.params;
        await Todo.findByIdAndDelete(id);

        response.status(200).json({
            success: true ,
            messsage: "User Deleted Successfully",
        });
    }
    catch(err) {
        console.error(err);
        response.status(500)
        .json({
            success: false ,
            error:err.message,
            message: 'Server Error!',
        });
    }
}