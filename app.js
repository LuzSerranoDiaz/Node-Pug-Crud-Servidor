import path from 'path';
import createError from 'http-errors'
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import {router} from "./routes/rutasTareas.js"
import session from 'express-session';

const app = express();
// ------------------------ Geestion de variables de sesion  ----------------------------
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized:true
}));
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
export default app;