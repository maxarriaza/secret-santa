import express, { Express, Request, Response } from 'express';
import { SecretSanta } from './models/secret-santa';

const app: Express = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post('/', (req: Request, res: Response) => {
    try {
        const people = req.body.people || [];
        const couples = req.body.couples || [];
        const secretSanta = SecretSanta.Build(people, couples);
        const response = secretSanta.execute();
        res.status(200).json(response)
    } catch(err) {
        res.status(400).json({
            message: err.message
        });
    }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});