const mongoose = require("mongoose")

const { Schema } = mongoose

const ProductsSchema = new Schema ({
    id: {
        type: Schema.Types.ObjectId,
    },
    name: {
        type: String,
        maxLenght: 50,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        maxLenght: 500,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Products", ProductsSchema)