require('dotenv').config();

const express = require('express');
const path = require('path');
const connectDB = require('./database/connection');
const authRoute = require('./routes/auth');
const responseRoute = require('./routes/responses');
const questionsRoute = require('./routes/questions');

const cookies = require("cookie-parser");
const cors = require('cors');
const isDevelopmentMode = process.env.NODE_ENV === 'development';


connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

if (isDevelopmentMode) {
	app.use(cors({
		origin: 'http://localhost:4200',
		credentials: true
	}))
}

app.use(cookies());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoute);
app.use('/questions', questionsRoute);
app.use('/responses', responseRoute);

if (!isDevelopmentMode) {
	// app.use(express.static(path.resolve('./client/dist/angular_survey')));
	// app.use(express.static('public'))
	app.use(express.static('client/dist/angular_survey'))

	// app.get('*', (req, res) => {
	// 	res.status(202).sendFile(path.resolve('./client/dist/angular_survey/index.html'));
	// });
	// app.get('/', (req, res) => {
	// 	res.sendFile('index.html', { root: path.join(__dirname, 'public') });
	// });
	app.get('/', (req, res) => {
		res.sendFile('index.html', { root: path.join(__dirname, 'client/dist/angular_survey') });
	});
}



app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});


module.exports = app