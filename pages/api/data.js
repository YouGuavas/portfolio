import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
	try {
		const client = await clientPromise;
		const db = client.db('portfolio'); // Replace with actual DB name
		const data = await db.collection('tiers').find({}).toArray();

		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error fetching data' });
	}
}
