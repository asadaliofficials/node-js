import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.json({ message: 'hello from server created with yarn...' });
});

export default app;
