import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { dataBase, port } from '../config/config.js';

import './models/Designer';
import './models/Product';
import './models/User';

import { userRoutes } from './routes/User';
import { authenticateUserRoutes } from './routes/AuthenticateUser';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dataBase, (err) => { if(err) console.log(err) });

const Designer = mongoose.model('Designer');
const Product = mongoose.model('Product');
const User = mongoose.model('User');

const appRouter = express.Router();

appRouter.use('/user', userRoutes(User));
appRouter.use('/user', authenticateUserRoutes(User));

app.use('/api', appRouter);
app.listen(port, () => {
  console.log('server listening on port', port);
});
