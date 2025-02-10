import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST(req) {
	try {
		const { priceId, quantity } = await req.json(); // Receive params from frontend

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

		return NextResponse.json({ sessionId: session.id });
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
