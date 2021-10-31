import express from 'express';

import path from 'path';

// Middlewares
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

// Routers
import employeeRouter from  './routes/employee-routes.js';
import employersRouter from  './routes/employer-routes.js';
import filesRouter from  './routes/file-routes.js';
import tasksRouter from  './routes/task-routes.js';
import classesRouter from  './routes/class-routes.js';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/employees', employeeRouter);
app.use('/employers', employersRouter);
app.use('/files', filesRouter);
app.use('/tasks', tasksRouter);
app.use('/classes', classesRouter);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(3000, ()=>{
    console.log("listening on 3000");
});


// to be deleted
import repo from './persistency/data-population-repository.js';