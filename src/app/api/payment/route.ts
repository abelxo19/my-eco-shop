"use server";
import { NextApiRequest, NextApiResponse } from 'next';
import { stripe } from '../../../lib/stripe';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { product } = req.body;

    try {
      // Create a Checkout Session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: product.name,
                images: [product.imageUrl],
              },
              unit_amount: product.price * 100, // Stripe expects amount in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });

      // Send the session ID to the client
      res.status(200).json({ checkout_url: session.url });
    } catch (error) {
      res.status(500).json({ error: 'Error creating Stripe Checkout session' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
