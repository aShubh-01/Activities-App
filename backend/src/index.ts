import express from 'express';
import cors from 'cors';

const mainRouter = express();
const port = process.env.PORT || 3000;

mainRouter.use(express.json());
mainRouter.use(cors());


mainRouter.listen(port, () => console.log('Backend on port ' + port))