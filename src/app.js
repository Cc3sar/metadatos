import express, { urlencoded } from 'express';
import cors from 'cors';

import home from './home';

const app = express();

app.use(cors());

app.use(express.static(process.cwd() + '/public')); //css

app.use(express.urlencoded({ extended: false }));

app.use(home);

export default app;