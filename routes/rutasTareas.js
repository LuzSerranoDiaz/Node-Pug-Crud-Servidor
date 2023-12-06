import express from "express";
import { controladorTareas } from "../controller/controlador.js"
export const router = express.Router();
router.get('/', controladorTareas.listarTareas);
router.post('/save', controladorTareas.guardarTarea);
router.get('/delete/:id', controladorTareas.borrarTarea);
router.get('/edit/:id', controladorTareas.editarTarea);
router.post('/postedit/:id', controladorTareas.editadaTarea);
