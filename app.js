import path from 'path';
import createError from 'http-errors'
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
/*
import indexRouter from "/app/SegundaApp/routes/index.js";
import usersRouter from "/app/SegundaApp/routes/users.js";
import saveRouter from '/app/SegundaApp/routes/save.js';
*/
import {router} from "./routes/rutasTareas.js"
const app = express();
//sol a __dirname en ES modules
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/save', saveRouter);
*/
app.use(router);
// catch 404 and forward to error handler
app.use(function(req, res, next) { next(createError(404)); });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;