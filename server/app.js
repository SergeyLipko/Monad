import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import { dataBase, port } from '../config/config.js';

import './models/Designer';
import './models/Product';

import { designersRoutes } from './routes/Designers';
import { productsRoutes } from './routes/Products';



const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(dataBase, (err) => { if(err) console.log(err); });

const Designer = mongoose.model('Designer');
const Product = mongoose.model('Product');

const appRouter = express.Router();


appRouter.use('/designers', designersRoutes(Designer));
appRouter.use('/products', productsRoutes(Product));


app.use('/api', appRouter);
app.listen(port, () => {
  console.log('server listening on port', port);
});
