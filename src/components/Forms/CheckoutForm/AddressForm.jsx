import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  INCREMENT_FORM_STEP,
  SET_SHIPPING_DATA,
} from "../../../redux/actions/constants/actionTypes";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { AddressValidateSchema } from "../../../helpers/yup";
import { useFormik } from "formik";
import { commerce } from "../../../lib/commerce";
import Field from "../FormComponents/Field";
const AddressForm = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.checkout);
  const { email, displayName } = useSelector((state) => state.auth);
  const [shippingCountries, setShippingCountries] = useState({});
  const [subDivisions, setSubDivisions] = useState({});
  const [shippingOptions, setShippingOptions] = useState([]);

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivisions = Object.entries(subDivisions).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const options =
    shippingOptions &&
    shippingOptions.map((option) => ({
      id: option.id,
      label: `${option.description} - ${option.price.formatted_with_symbol}`,
    }));

  const fetchShippingCountries = async (checkoutTokenId) => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutTokenId
      );
      setShippingCountries(countries);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSubdivisions = async (token, countryCode) => {
    try {
      const { subdivisions } =
        await commerce.services.localeListShippingSubdivisions(
          token,
          countryCode
        );
      setSubDivisions(subdivisions);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchShippingOptions = async (
    checkoutTokenId,
    country,
    region = null
  ) => {
    try {
      const options = await commerce.checkout.getShippingOptions(
        checkoutTokenId,
        { country, region }
      );
      setShippingOptions(options);
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      zip: "",
      shippingCountry: "",
      shippingSubDivision: "",
      shippingOption: "",
    },
    validationSchema: AddressValidateSchema,
    onSubmit: (values) => {
      dispatch({
        type: SET_SHIPPING_DATA,
        payload: { ...values, email: email, FullName: displayName },
      });
      dispatch({ type: INCREMENT_FORM_STEP });
    },
  });

  useEffect(() => {
    if (token) fetchShippingCountries(token.id);
  }, [token]);

  useEffect(() => {
    if (formik.values.shippingCountry)
      fetchSubdivisions(token.id, formik.values.shippingCountry);
  }, [formik.values.shippingCountry]);

  useEffect(() => {
    if (formik.values.shippingSubDivision)
      fetchShippingOptions(
        token.id,
        formik.values.shippingCountry,
        formik.values.shippingSubDivision
      );
  }, [formik.values.shippingSubDivision]);

  return (
    <div>
      <div className="w-full  bg-white">
        <h1>Shipping Address</h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col">
          <div className="grid grid-cols-2 gap-3">
            <Field
              dot={true}
              error={formik.touched?.address && formik.errors?.address}
              label="Address"
              name="address"
              onChange={formik.handleChange}
              type="text"
            />
            <Field
              dot={true}
              error={formik.touched?.city && formik.errors?.city}
              label="City"
              name="city"
              onChange={formik.handleChange}
              type="text"
            />
            <Field
              dot={true}
              error={formik.touched?.zip && formik.errors?.zip}
              label="ZIP / Postal Code"
              name="zip"
              onChange={formik.handleChange}
              type="text"
            />
            <Field
              dot={true}
              error={
                formik.touched?.shippingCountry &&
                formik.errors?.shippingCountry
              }
              label="Shipping Country"
              name="shippingCountry"
              onChange={formik.handleChange}
              type="select"
            >
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.label}
                </option>
              ))}
            </Field>
            <Field
              dot={true}
              error={
                formik.touched?.shippingSubDivision &&
                formik.errors?.shippingSubDivision
              }
              label="Shipping Subdivision"
              name="shippingSubDivision"
              onChange={formik.handleChange}
              type="select"
            >
              {subdivisions.map((subdivision) => (
                <option key={subdivision.id} value={subdivision.id}>
                  {subdivision.label}
                </option>
              ))}
            </Field>
            <Field
              dot={true}
              error={
                formik.touched?.shippingOption && formik.errors?.shippingOption
              }
              label="Shipping Options"
              name="shippingOption"
              onChange={formik.handleChange}
              type="select"
            >
              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </Field>
          </div>
          <div className="flex justify-between mt-4">
            <Link to="/cart" className="bg-amazonYellow py-2 px-6">
              Back to cart
            </Link>
            <button
              type="submit"
              className="flex items-center bg-amazonYellow py-2 px-8"
            >
              Next <GrNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
