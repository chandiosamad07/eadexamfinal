import mongoose from "mongoose";

// Defining Schema

const RecipeSchema = new mongoose.Schema({
    tilte: { type: String, required: true, trim: true },
    Des:  { type: String, required: true, trim: true },
    ins:  { type: String, required: true, trim: true },
    Ing: { type: String, required: true, trim: true },
})


const RecipeModel = mongoose.model("Recipe", RecipeSchema)

export default RecipeModel