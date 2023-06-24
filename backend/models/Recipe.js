import mongoose from "mongoose";

// Defining Schema

const RecipeSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 18, max: 60 },
    fees: {type: mongoose.Decimal128, required: true, validate: (v) => v >= 5000}
})

// Model
const RecipeModel = mongoose.model("Recipe", RecipeSchema)

export default RecipeModel