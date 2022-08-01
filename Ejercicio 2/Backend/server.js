import routes from './app/routes/index.js'
import {connectToDb} from './config/db.js';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 3001;
connectToDb();


app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(port,  () => {
    console.log("En linea");
})