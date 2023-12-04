import express from 'express';
const saveRouter = express.Router();

saveRouter.get('/', function(req, res, next) {
    res.render('guardar', { title: 'Express Mysql CRUD', tareaTitulo: req.query.title, tareaDescripcion: req.query.description });
});

export default saveRouter;