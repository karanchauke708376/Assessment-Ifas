// import the model

const { response, request } = require("express");
const Todo = require("../models/Todo");

// define route handler
exports.getTodo = async(request , response) => {
    try {
        // fetch all todo  items from database
        const todos = await Todo.find({});

        // response
        response.status(200)
        .json({
            success: true,
            data: todos,
            message: "Entire Todo Data Is Fetch ... " ,
        });

    }
    catch(err) {
        console.error(err);
        response.status(500)
        .json({
            success: false ,
            error:err.message ,
            message: 'Server Error!'
        })
    }
} 

exports.getTodoById = async(request , response) => {
    try {
        // Extract Data Basic On ID ,  on parameter
        const id = request.params.id; 
        const todo = await Todo.findById({_id: id});

        // Data for given id not found
        if(!todo) {
            return response.status(404).json({
                success: false ,
                message: "User Not Data Found With Given Id!" ,
            })
        }
        // Data for given id found
        response.status(200).json({
            success: true ,
            data: todo,
            message: `User ${id} Data Successfully Fetch` ,
        });
    }
    catch(err) {
        console.error(err);
        response.status(500)
        .json({
            success:false ,
            error:err.message ,
            message: 'Server Error!',
        });

    }
}