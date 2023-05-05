import express from "express"
import { getAllPedidos, getPedidos, createPedidos, updatePedidos, deletePedidos } from "../controllers/PedidosController.js"

const router = express.Router()

router.get("/", getAllPedidos);
router.get("/:id", getPedidos);
router.post("/", createPedidos);
router.put("/:id", updatePedidos);
router.delete("/:id", deletePedidos);

export default router

