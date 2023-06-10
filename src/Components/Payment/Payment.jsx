import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import useSelectedClasses from "../../Hooks/useSelectedClasses";

const stripePromise = loadStripe(import.meta.env.VITE_GATEWAY_KEY);
const Payment = () => {
  const id = window.location.pathname.split("/")[3];

  const [selectedClasses] = useSelectedClasses();
  const singleClass = selectedClasses?.find(
    (singleClass) => singleClass._id === id
  );

  return (
    <>
      <Elements stripe={stripePromise}>
        <Checkout singleClass={singleClass} />
      </Elements>
    </>
  );
};

export default Payment;
