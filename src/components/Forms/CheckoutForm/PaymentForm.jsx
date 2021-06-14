import React, { useState } from "react";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import Review from "./Review";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";
import {
  DECREMENT_FORM_STEP,
  INCREMENT_FORM_STEP,
} from "../../../redux/actions/constants/actionTypes";
import { handleCaptureCheckout } from "../../../redux/actions/checkout";

const PaymentForm = () => {
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("");
  const { token, shippingData } = useSelector((state) => state.checkout);
  console.log(token);
  const handleChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  const handleCreditCardPayment = async (e, elements, stripe) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const cardEelement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardEelement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: token.live.line_items,
        customer: {
          firstname: shippingData.FullName.split(" ")[0],
          lastName: shippingData.FullName.split(" ")[1],
          email: shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: shippingData.address,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubDivision,
          postal_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: {
          shipping_method: shippingData.shippingOption,
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      dispatch(handleCaptureCheckout(token.id, orderData));
      dispatch({ type: INCREMENT_FORM_STEP });
    }
  };

  const handleCashOnDelivery = (e) => {
    // const paymentMethodId = token.gateways.manual[0].id;
    // console.log(paymentMethodId);
    // const orderData = {
    //   line_items: token.live.line_items,
    //   customer: {
    //     firstname: shippingData.FullName,
    //     email: shippingData.email,
    //   },
    //   shipping: {
    //     name: "Primary",
    //     street: shippingData.address,
    //     town_city: shippingData.city,
    //     county_state: shippingData.shippingSubDivision,
    //     postal_code: shippingData.zip,
    //     country: shippingData.shippingCountry,
    //   },
    //   fulfillment: {
    //     shipping_method: shippingData.shippingOption,
    //   },
    //   payment: {
    //     gateway: "manual",
    //     manual: {
    //       // id: paymentMethodId,
    //     },
    //   },
    // };
  };

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  const backStep = (e) => {
    dispatch({ type: DECREMENT_FORM_STEP });
  };
  return (
    <div>
      <Review />
      <hr />
      <h6 className="my-5">Payment Method</h6>
      <div id="paymentOptions" className="mb-4">
        <label htmlFor="paymentMethod" className="mr-5">
          <input
            type="radio"
            name="paymentMethod"
            value="Cash On Delivery"
            onChange={handleChange}
            className="mr-3"
          />
          Cash On Delivery
        </label>
        <label htmlFor="paymentMethod">
          <input
            type="radio"
            name="paymentMethod"
            value="Credit Card"
            onChange={handleChange}
            className="mr-3"
          />
          Credit Card
        </label>
      </div>

      {paymentMethod === "Credit Card" ? (
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form
                onSubmit={(e) => handleCreditCardPayment(e, elements, stripe)}
              >
                <CardElement />
                <br />
                <div className="flex justify-between">
                  <button
                    onClick={backStep}
                    className="bg-amazonYellow py-2 px-6"
                  >
                    Back to cart
                  </button>
                  <button
                    type="submit"
                    className="flex items-center bg-amazonYellow py-2 px-8"
                    disabled={!stripe}
                  >
                    Pay {token.live.subtotal.formatted_with_symbol}
                  </button>
                </div>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      ) : (
        <div className="flex justify-between">
          <button onClick={backStep} className="bg-amazonYellow py-2 px-6">
            Back to cart
          </button>
          <button
            className="flex items-center bg-amazonYellow py-2 px-8"
            disabled={!paymentMethod}
            onClick={handleCashOnDelivery}
          >
            Pay {token.live.subtotal.formatted_with_symbol}
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
