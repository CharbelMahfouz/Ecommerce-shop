import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomer } from "../../redux/actions/customer";

export const OrderHistory = () => {
  const dispatch = useDispatch();
  const { customer } = useSelector((state) => state.customer);
  console.log(customer);
  useEffect(() => {
    dispatch(fetchCustomer());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(fetchCustomerOrders())
  // },[])
  return <div>orders</div>;
};
