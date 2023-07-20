import express from "express";
import { paginaInicio } from "../controllers/pagianControllers.js";
import { agregarTareas } from "../controllers/agregarTareas.js";

const router = express.Router()

router.get("/", paginaInicio)
router.post("/",agregarTareas)

export default router;