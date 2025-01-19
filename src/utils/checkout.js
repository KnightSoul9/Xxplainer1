import { loadStripe } from "@stripe/stripe-js";

export const checkout = async ({
  lineItems,
  customerEmail,
  userId,
  courseId,
  courseRoute,
}) => {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY, {
        apiVersion: "2022-11-15",
      });
    }
    return stripePromise;
  };

  const clientReferenceId = `${userId}-${courseId}`;

  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    // successUrl: `${window.location.origin}/${courseRoute}?session_id={CHECKOUT_SESSION_ID}`,
    successUrl: `${window.location.origin}/u/checkout/payment-success?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
    customerEmail,
    clientReferenceId,
  });
};

// http://localhost:3000/?session_id=cs_test_a1IxzWkyQsbbKHOHKBRo5LqgWK9k1pTNeEMHgjyF5OZpMsGXs6TSre5O50
