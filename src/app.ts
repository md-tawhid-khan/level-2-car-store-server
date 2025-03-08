import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import carRouter from './module/carInfo/car.router';

const app: Application = express();
// const port = 3000;



app.use(express.json());
app.use(cors());

app.use('/api/car/', carRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
