/* eslint-disable react-hooks/rules-of-hooks */
import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

interface IProducts {
  price: string;
  quantity: number;
}

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const { products } = request.body;

  const line_items: IProducts[] = products

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed.' });
  }

  if (!products.length) {
    return response.status(400).json({ error: 'Price not found.' });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items
  })

  return response.status(201).json({
    checkoutUrl: checkoutSession.url
  })
}

