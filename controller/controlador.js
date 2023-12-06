export const controladorTareas = {};
controladorTareas.lista= [
                            {
                            id:1,
                            titulo:"tarea1",
                            description:"weeeeeeeeeeeewuuuuuuuuuuuuuuuu"
                            },
                            {
                            id:2,
                            titulo:"tarea2",
                            description:">:0"
                            },
                            {
                            id:3,
                            titulo:"tarea3",
                            description:">:0"
                            },
                            {
                            id:4,
                            titulo:"tarea4",
                            description:">:0"
                            }
                        ];
controladorTareas.listarTareas = (req, res) => {
    Object.entries(req.session).forEach(entry => {
        const [key, value] = entry;
        console.log(`${key} : ${value}`);
    });
    
    res.render('index', {title: 'Express MySQL CRUD', lista:controladorTareas.lista, msj: req.session.message, msjType:req.session.type });
    req.session.destroy();
}
controladorTareas.guardarTarea = (req, res, next) => {
    controladorTareas.lista.push({id:controladorTareas.lista.length+1, titulo: req.body.title, description: req.body.description});
    req.session.message='Tarea Guardada';
    req.session.type= 'SUCCESS >:D b';

    res.redirect('/');

    // 
}
controladorTareas.borrarTarea = (req, res) => {
    //splice reestructura las posiciones pero no los id
    //index of para reestructurar los id
    controladorTareas.lista.splice(req.params.id-1, 1);
    //reestructuracion
    controladorTareas.lista.forEach(e => {
        e.id = controladorTareas.lista.indexOf(e)+1;
    });
    req.session.message='Tarea Borrada';
    req.session.type= 'danger';

    res.redirect('/');
    res.render('index', {title: 'Express MySQL CRUD', lista:controladorTareas.lista, msj: req.session.message, msjType:req.session.type });
}
controladorTareas.editarTarea = (req, res) => {
    res.render('edit', {title: 'Express MySQL CRUD', tit:controladorTareas.lista[req.params.id-1].titulo, 
                                                     desc:controladorTareas.lista[req.params.id-1].description,
                                                     id: req.params.id});
    
}
controladorTareas.editadaTarea = (req, res) => {
    // controladorTareas.lista.push({id:controladorTareas.lista.length+1, titulo: req.body.title, description: req.body.description});
    // req.session.message='Tarea Guardada';
    // req.session.type= 'SUCCESS >:D b';
    var a = req.params.id;
    controladorTareas.lista[a-1]={id:a, titulo: req.body.title, description: req.body.description};
    req.session.message='Tarea editada C:';
    req.session.type= 'primary';
    res.redirect('/');
}