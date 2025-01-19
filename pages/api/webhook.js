import Stripe from "stripe";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});
const endpointSecret = process.env.WEBHOOK_SIGNING_SECRET;

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const sig = req.headers["stripe-signature"];
  const buf = await buffer(req);

  let event;

  try {
    event = stripe.webhooks.constructEvent(buf, sig, endpointSecret);
  } catch {
    res.status(400).send(`Webhook Error`);
    return;
  }

  switch (event.type) {
    case "checkout.session.completed":
    // console.log(event);
    default:
      break;
  }

  res.json({ received: true });
}
