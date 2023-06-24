import RecipeModel from "../models/Recipe.js"

class ControllerRcipe {
    static createDoc = async (req, res) => {


        try {
            const { title, ins, ing,des } = req.body
            const doc = new RecipeModel({
                title: title,
                ins: ins,
                ing: ing,
                des:des

            })
           
            const result = await doc.save()
           
            res.redirect("/Rcipe")
        } catch (error) {
            console.log(error)
        }
    }
    static getAllDoc = async (req, res) => {
        try {
            const result = await RecipeModel.find()
           
            res.render("index", { data: result })
        } catch (error) {
            console.log(error)
        }

    }
    static editDoc = async (req, res) => {
       
        try {
            const result = await RecipeModel.findById(req.params.id)
            
            res.render("edit", {data: result})
        } catch (error) {
            console.log(error)
        }
        
    }
    static updateDocById = async (req, res) => {
        
        try {
            const result = await RecipeModel.findByIdAndUpdate(req.params.id, req.body)
        } catch (error) {
            console.log(error)
        }
        res.redirect("/Rcipe")
    }
    static deleteDocById = async (req, res) => {
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/Rcipe")
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default ControllerRcipe