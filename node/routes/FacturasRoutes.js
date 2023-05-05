import express from "express"
import { getAllFacturas, getFacturas, createFacturas, updateFacturas, deleteFacturas } from "../controllers/FacturasController.js"

const router = express.Router()

router.get("/", getAllFacturas);
router.get("/:id", getFacturas);
router.post("/", createFacturas);
router.put("/:id", updateFacturas);
router.delete("/:id", deleteFacturas);

export default router

