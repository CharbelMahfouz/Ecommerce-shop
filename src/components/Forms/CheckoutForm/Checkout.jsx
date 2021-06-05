import React, { useEffect } from "react";
import { Paper, Stepper, Step, StepLabel, Typography } from "@material-ui/core";
import useStyles from "./CheckoutStyles";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm.jsx";
import { useSelector, useDispatch } from "react-redux";
import { generateCheckoutToken } from "../../../redux/actions/checkout";
import { Link } from "react-router-dom";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const { activeStep, token, order } = useSelector((state) => state.checkout);
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const steps = ["Shipping address", "Payment details"];

  const Confirmation = () =>
    order?.customer ? (
      <>
        <div>
          <h5>
            Thank You For Your Purchase, {order?.customer?.firstname}{" "}
            {order?.customer?.lastname}!
          </h5>
          <hr />
          <p>Order ref: {order?.customer_reference}</p>
        </div>
        <br />
        <Link to="/">Back To Home</Link>
      </>
    ) : (
      <>
        <div>
          <h5>Thank You For Your Purchase !</h5>
          <hr />
        </div>
        <br />
        <Link to="/">Back To Home</Link>
      </>
    );
  console.log(token);
  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);

  useEffect(() => {
    dispatch(generateCheckoutToken(cart.id));
  }, [cart.id]);

  return (
    <>
      <div className={classes.toolbar}>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((step) => (
                <Step key={step}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? <Confirmation /> : token && <Form />}
          </Paper>
        </main>
      </div>
    </>
  );
};

export default CheckoutForm;
