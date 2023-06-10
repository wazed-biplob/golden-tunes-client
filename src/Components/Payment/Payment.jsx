import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_GATEWAY_KEY);
const Payment = () => {
  return (
    <>
      <Elements stripe={stripePromise}>
        <Checkout cart={cart} price={price} />
      </Elements>
    </>
  );
};

export default Payment;
