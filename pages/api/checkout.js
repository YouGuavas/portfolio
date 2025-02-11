import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method Not Allowed' });
	}
	try {
		console.log('Received request body:', req.body); // Debugging log

		const { priceId, quantity } = await req.body; // Receive params from frontend
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ['card'],
			line_items: [
				{
					price: priceId,
					quantity: quantity,
				},
			],
			mode: 'payment',
			success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
			cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
		});
		console.log('Session created:', session.id); // Debugging log

		return res.status(200).json({ sessionId: session.id });
	} catch (error) {
		console.error('Stripe API error:', error);

		return res.status(500).json({ error: error.message }, { status: 500 });
	}
}
