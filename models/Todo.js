
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(   //  Description Of Schema
    {
        userId: {
            type: Number,
            required: true ,
        },

        firstName: {
            type: String ,
            required: true,
            maxLength: 50 ,
            // trim : true,
        },
        lastName: {
            type: String,
            required:true,
            maxLength: 50,
            // trim : true,

        },

        email: {
            type: String ,
            required: true ,
            maxLength: 30 ,
            trim: true,
        },

        age: {
            type: Number ,
            trim: true,
        },

        gender: {
            type: String ,
            trim: true,
            maxLengt: 5,
        },

        address: {
            type: String ,
            maxLength: 150 ,
            trim: true,
        },

        contact: {
            type: Number ,
            trim: true,
        },

        createdate: {
            type:Date ,
            required : true , 
            default : Date.now(),
        },

        updatedAt: {
            type: Date ,
            required: true,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo" , todoSchema);