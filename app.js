const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');

const employeesRouter = require('./routes/employees');
const menuItemsRouter = require('./routes/menuItems');
const reservationsRouter = require('./routes/reservations');
const tablesRouter = require('./routes/tables');




const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

app.use('/employees', employeesRouter);
app.use('/menuItems', menuItemsRouter);
app.use('/reservations', reservationsRouter);
app.use('/tables', tablesRouter);


module.exports = app;
