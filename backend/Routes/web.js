import express from "express"
const router = express.Router()
import ControllerRcipe from '../Controller/ControllerRcipe'

router.get("/", studentController.getAllDoc)
router.post("/", studentController.createDoc)
router.get("/edit/:id", studentController.editDoc)
router.post("/update/:id", studentController.updateDocById)
router.post("/delete/:id", studentController.deleteDocById)


export default router