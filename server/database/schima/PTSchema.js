const mongoose = require("mongoose");

const PTSchema = new mongoose.Schema({
    productType: {
        type: String
    },
    productTypeImage: {
        type: String
    },
    catagoryToken: {
        type: String
    },
    productTypeToken: {
        type: String
    }
})

const Product_Type_Schema = mongoose.model("product_type_collection", PTSchema);
module.exports = Product_Type_Schema;
