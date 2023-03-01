const mongoose = require('mongoose');
const connectDatabase = () => {
    mongoose.connect("mongodb+srv://Dipesh:Paudel@cluster0.jbp5b0t.mongodb.net/?retryWrites=true&w=majority", 
    (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("Database has been connected successfully");
        }
    }
    );
}

module.exports = connectDatabase;