import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutButton({ priceId }) {
	const [loading, setLoading] = useState(false);

	const handleCheckout = async () => {
		setLoading(true);
		const stripe = await stripePromise;

		const response = await fetch('/api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ priceId, quantity: 1 }), // Send params here
		});

		const { sessionId } = await response.json();

		if (sessionId) {
			await stripe.redirectToCheckout({ sessionId });
		}

		setLoading(false);
	};

	return (
		<button
			onClick={handleCheckout}
			disabled={loading}
			className="bg-blue-500 text-white px-4 py-2 rounded"
		>
			{loading ? 'Processing...' : 'Buy Now'}
		</button>
	);
}
