import express from 'express';
import cors from 'cors';
import { port } from './config.js';
import { getActivities, bookActivity } from './controllers.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/list', getActivities);
app.post('/book/:id', bookActivity);

app.listen(port, () => console.log('Backend running on port ' + port));
