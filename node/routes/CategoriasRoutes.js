import express from "express"
import { getAllCategorias, getCategorias, createCategorias, updateCategorias, deleteCategorias } from "../controllers/CategoriasController.js"

const router = express.Router()

router.get("/", getAllCategorias);
router.get("/:id", getCategorias);
router.post("/", createCategorias);
router.put("/:id", updateCategorias);
router.delete("/:id", deleteCategorias);

export default router

