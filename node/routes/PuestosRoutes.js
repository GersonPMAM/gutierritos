import express from "express"
import { getAllPuestos, getPuestos, createPuestos, updatePuestos, deletePuestos } from "../controllers/PuestosController.js"

const router = express.Router()

router.get("/", getAllPuestos);
router.get("/:id", getPuestos);
router.post("/", createPuestos);
router.put("/:id", updatePuestos);
router.delete("/:id", deletePuestos);

export default router

