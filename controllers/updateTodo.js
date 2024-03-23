// import the models
const { response, request } = require("express");
const Todo = require("../models/Todo");

// Define Route Handler

exports.updateTodo = async(request , response) => {
    try {

        const {id} = request.params;  // id find
        const {userId , firstName , lastName , email , age , gender , address , contact } = request.body;
        const todo = await Todo.findByIdAndUpdate(
            {_id: id} ,
            {userId , firstName , lastName , email , age , gender , address , contact , updatedAt: Date.now()} ,
        )

        response.status(200).json({
            success: true,
            data: todo,
            messsage:  `User Updated Successfully` ,
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