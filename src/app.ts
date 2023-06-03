import express from 'express';
import route from './controller/student.controller';
import bodyParser from 'body-Parser';

const app = express()

app.use(bodyParser.json())

app.use('/student', route)

export default app;