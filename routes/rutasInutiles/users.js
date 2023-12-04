import express from 'express';
const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.render('user',{title:'Pagina user'});
});

export default usersRouter;
