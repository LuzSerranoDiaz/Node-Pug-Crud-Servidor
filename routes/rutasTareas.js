import express from "express";
import { controladorTareas } from "../controller/controlador.js"
export const router = express.Router();
router.get('/', function(req, res){
    controladorTareas.listarTareas;
});
router.post('/save', function(req, res){
    controladorTareas.guardarTarea;
});
router.get('/delete/:id', function(req, res){
    controladorTareas.borrarTarea;
});
router.get('/edit/:id', function(req, res){
    controladorTareas.editarTarea;
});
router.post('/postedit/:id', function(req, res){
    controladorTareas.editadaTarea;
});
// router.get('/', controladorTareas.listarTareas);
// router.post('/save', controladorTareas.guardarTarea);
// router.get('/delete/:id', controladorTareas.borrarTarea);
// router.get('/edit/:id', controladorTareas.editarTarea);
// router.post('/postedit/:id', controladorTareas.editadaTarea);