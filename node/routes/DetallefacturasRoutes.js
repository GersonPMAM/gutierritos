import express from "express"
import { getAllDetallefacturas, getDetallefacturas, createDetallefacturas, updateDetallefacturas, deleteDetallefacturas } from "../controllers/DetallefacturasController.js"

const router = express.Router()

router.get("/", getAllDetallefacturas);
router.get("/:id", getDetallefacturas);
router.post("/", createDetallefacturas);
router.put("/:id", updateDetallefacturas);
router.delete("/:id", deleteDetallefacturas);

export default router

