import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Store this in an .env file
const options = { useNewUrlParser: true, useUnifiedTopology: true };

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
	throw new Error('Please add your MongoDB URI to .env');
}

if (process.env.NODE_ENV === 'development') {
	// Ensure reusing the connection in dev to prevent multiple connections
	if (!global._mongoClientPromise) {
		client = new MongoClient(uri, options);
		global._mongoClientPromise = client.connect();
	}
	clientPromise = global._mongoClientPromise;
} else {
	// In production, create a new connection
	client = new MongoClient(uri, options);
	clientPromise = client.connect();
}

export default clientPromise;
