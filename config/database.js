
const mongoose = require("mongoose");

require("dotenv").config();  // .env define data load to process object inside

const dbConnect = () => {   // connection Establishment to node.js 
    mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser:true ,   // promise return
        useUnifiedTopology:true ,

    })
        .then(() => console.log("DB Connection Is Successful . . . "))
        .catch( (error) => {
            console.log("Issue In DB Connection!");
            console.error(error.message);
            process.exit(1);
        });
}

module.exports = dbConnect;