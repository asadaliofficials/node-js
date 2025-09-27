import express from 'express';

const app = express();

app.use((req, res) => {
	res.send('hello from express server...');
});

export default app;
