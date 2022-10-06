const { connect, connection } = require('mongoose');

const DATABASE_URI = process.env.DATABASE_URI || null;

function connectDB() {
	if (DATABASE_URI == null) {
		throw new Error('Define `DATABASE_URI` in Enviroment Variables.');
	}

	connect(DATABASE_URI);

	connection.on('connected', () => {
		console.log('Successfully connected to database!');
	});

	connection.on('error', (err) => {
		throw err;
	});
}

module.exports = connectDB;
