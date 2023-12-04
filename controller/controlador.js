export const controladorTareas = {};
controladorTareas.lista= [
                            {
                            id:1,
                            titulo:"tarea1",
                            descripcion:"weeeeeeeeeeeewuuuuuuuuuuuuuuuu"
                            },
                            {
                            id:2,
                            titulo:"tarea2",
                            descripcion:">:0"
                            }
                        ];
controladorTareas.listarTareas = (req, res) => {
    res.render('index', {title: 'Express MySQL CRUD', lista:controladorTareas.lista });
}
controladorTareas.guardarTareas = (req, res) => {
    res.render('guardar', {title: 'Express MySQL CRUD', tareaTitulo: req.query.title, tareaDescripcion: req.query.title, tareaDescripcion: req.query.descripcion});
    controladorTareas.lista.push({id:controladorTareas.lista.length+1, titulo: req.query.title, tareaDescripcion: req.query.description});
}
controladorTareas.borrarTareas = (req, res) => {

}
controladorTareas.editarTareas = (req, res) => {

}
controladorTareas.editadaTareas = (req, res) => {

}