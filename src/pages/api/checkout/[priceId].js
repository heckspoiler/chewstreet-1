import { stripe } from "src/pricing/utils/stripe";
import { SITE_URL } from "src/core/utils/index.js";

export default async function handler(req, res) {
  const { priceId } = req.query;

  // the code below creates a new session that has different parameters
  // which include the priceId which is the price of each item, the success_url which
  // is the redirection after a purchase is successful, unsuccessful or cancelled.
  // furthermore, we set the modes to subscription and the payment method to card, but we could add more

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${SITE_URL}/success`,
    cancel_url: `${SITE_URL}/pricing`,
  });
  console.log(session);
  // the response of the session above is then sent to the frontend
  res.send({ id: session.id });
}
