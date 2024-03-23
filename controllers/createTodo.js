// import the models
const { response } = require("express");
const Todo = require("../models/Todo");

// Define route handler

exports.createTodo = async(request , response) => {
    try {
            // Extract data from request body
            const {userId , firstName , lastName , email , age , gender , address , contact  } = request.body;
            // create a new Todo Obj and Insert in DB
            const res = await Todo.create({userId , firstName , lastName , email , age , gender , address , contact});
            // send a json response with a success flag


            response.status(200)
            .json({
                    success:true,
                    data:res,
                    message:'User Entry Created Successfully...',
                });
    }
    catch(err) {
        console.error(err);
        // console.log(err);
        response.status(500)
        .json({
            success: false,
            message:err.message,
            data: "Internal Server Error",
        })
    }
}

