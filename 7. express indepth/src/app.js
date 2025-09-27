import express from 'express';
import morgan from 'morgan';

import reqMiddeware from './middlewares/req.middleware.js';

const app = express();
app.use(morgan('tiny'));
app.use(reqMiddeware);

app.use((req, res) => {
	res.send('hello from express server...');
});

export default app;
