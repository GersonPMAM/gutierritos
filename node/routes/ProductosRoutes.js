import express from "express"
import { getAllProductos, getProductos, createProductos, updateProductos, deleteProductos } from "../controllers/ProductosController.js"

const router = express.Router()

router.get("/", getAllProductos);
router.get("/:id", getProductos);
router.post("/", createProductos);
router.put("/:id", updateProductos);
router.delete("/:id", deleteProductos);

export default router

