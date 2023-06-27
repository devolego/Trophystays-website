"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  card: "",
  cardnumber: "",
  expiration: "",
  cvv: "",
  address: "",
  aptnumber: "",
  city: "",
  state: "",
  zipcode: "",
  country: "",
};

const onSubmit = (values, onSubmitProps) => {
  console.log("Form data", values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  cardnumber: Yup.string().required("Required"),
  expiration: Yup.string().required("Required"),
  cvv: Yup.string().required("Please Enter your Email"),
  address: Yup.string().required("Required"),
  aptnumber: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zipcode: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});

const FormikFormPayment = ({ isSubmitting }: any) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-wrap justify-between gap-4">
        <div className="form-control">
          <Field
            value="Credit or Debit Card"
            as="select"
            className="p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px] text-black w-full"
            name="card"
          >
            <option value="red">Credit card</option>
            <option value="green">Debit card</option>
          </Field>
          <ErrorMessage className="error" name="cardnumber" component="div" />
        </div>

        <div className="form-control">
          <Field
            className="p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]"
            type="text"
            id="cardnumber"
            name="cardnumber"
            placeholder="Card number"
          />
          <ErrorMessage className="error" name="cardnumber" component="div" />
        </div>

        <div className="form-control">
          <Field
            className="p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]"
            type="text"
            id="expiration"
            name="expiration"
            placeholder="Expiration"
          />
          <ErrorMessage className="error" name="expiration" component="div" />
        </div>

        <div className="form-control">
          <Field
            className="p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]"
            type="text"
            id="cvv"
            name="cvv"
            placeholder="CVV"
          />
          <ErrorMessage className="error" name="cvv" component="div" />
        </div>

        <div className="form-control">
          <Field
            className="p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]"
            type="text"
            id="address"
            name="address"
            placeholder="Street address"
          />
          <ErrorMessage className="error" name="address" component="div" />
        </div>

        <div className="form-control">
          <Field
            className="p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]"
            type="text"
            id="aptnumber"
            name="aptnumber"
            placeholder="Apt or suite number"
          />
          <ErrorMessage className="error" name="aptnumber" component="div" />
        </div>

        <div className="form-control">
          <Field
            className="p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]"
            type="text"
            id="city"
            name="city"
            placeholder="City"
          />
          <ErrorMessage className="error" name="city" component="div" />
        </div>

        <div className="form-control">
          <Field
            className="p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]"
            type="text"
            id="state"
            name="state"
            placeholder="State"
          />
          <ErrorMessage className="error" name="state" component="div" />
        </div>

        <div className="form-control">
          <Field
            className="p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]"
            type="text"
            id="zipcode"
            name="zipcode"
            placeholder="Zipcode"
          />
          <ErrorMessage className="error" name="zipcode" component="div" />
        </div>

        <div className="form-control">
          <Field
            className="p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]"
            type="text"
            id="country"
            name="country"
            placeholder="Country"
          />
          <ErrorMessage className="error" name="country" component="div" />
        </div>

        <label>
          <Field type="checkbox" name="checked" id="checkbox" /> Save Card for
          future payments
          <ErrorMessage className="error" name="country" component="div" />
        </label>

        {/* <button type="reset">Reset data</button>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button> */}
      </Form>
    </Formik>
  );
};

export default FormikFormPayment;
