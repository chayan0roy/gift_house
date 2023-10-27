const mongoose = require("mongoose");

const PCSchema = new mongoose.Schema({
    catagory: {
        type: String
    },
    catagoryImage: {
        type: String
    },
    catagoryToken: {
        type: String
    }
})

const Catagory_Schema = mongoose.model("catagory_collection", PCSchema);
module.exports = Catagory_Schema;