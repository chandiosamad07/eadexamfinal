const express = require('express')
const app = express()
const port = process.env.port || "3000"
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
import connectDB from "./db/connectdb.js";
import { join } from "path";
import router from "./Routes/web.js";

connectDB(DATABASE_URL)

app.use(express.urlencoded({extended: false}))


app.use("/Rcipe", express.static(join(process.cwd(), "public"))) 
app.use("/Rcipe/edit", express.static(join(process.cwd(), "public"))) 

app.set("view engine", "ejs")


app.use("/Rcipe", web)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})