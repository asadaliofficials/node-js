import 'dotenv/config';
import app from './src/app.js';

// dotenv.config(); // load .env file

const PORT = process.env.PORT;
app.listen(PORT, () => {
	console.log(`server is listening on port ${PORT}.`);
});
