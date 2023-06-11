import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProviders";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
const Checkout = ({ singleClass }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [AX] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();
  const price = singleClass?.price;
  useEffect(() => {
    if (price > 0) {
      AX.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, AX]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    console.log(card);
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);
    console.log("payment intent", paymentIntent);
    if (paymentIntent.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);

      //TODO : next steps
      const payment = {
        email: user?.email,
        transactionId: transactionId,
        price: price,
        orderStatus: "Pending",
        classId: singleClass?._id,
        className: singleClass?.className,
        instructorEmail: singleClass?.instructorEmail,
      };
      AX.post("/payments/", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          alert("Successfully Processed.");

          fetch(
            `https://golden-tunes-server.vercel.app/class-seat-count/${singleClass?.classId}`,
            {
              method: "POST",
            }
          )
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
    }
  };
  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-secondary"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError ? <p className="text-warning">{cardError}</p> : ""}
      {transactionId && (
        <p className="text-success">Success : Your TD: {transactionId}</p>
      )}
    </>
  );
};

export default Checkout;
