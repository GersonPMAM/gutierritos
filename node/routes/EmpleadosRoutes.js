import express from "express"
import { getAllEmpleados, getEmpleados, createEmpleados, updateEmpleados, deleteEmpleados } from "../controllers/EmpleadosController.js"

const router = express.Router()

router.get("/", getAllEmpleados);
router.get("/:id", getEmpleados);
router.post("/", createEmpleados);
router.put("/:id", updateEmpleados);
router.delete("/:id", deleteEmpleados);

export default router

