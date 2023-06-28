"use client";
import { Formik, Field, Form } from "formik";
import React from "react";

const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          phoneNumber: "",
          email: "",
          subject: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="flex flex-wrap justify-between gap-6 mb-[100px]">
          <Field
            className="p-4 border rounded-lg placeholder:font-semibold border-greyishBrown basis-[48%]"
            id="firstName"
            name="firstName"
            placeholder="Name"
          />

          <Field
            className="p-4 border rounded-lg placeholder:font-semibold border-greyishBrown basis-[48%] bg-transparent"
            as="select"
            name="subject"
          >
            <option value="ChooseSubject">Choose Subject</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>

          <Field
            className="p-4 border rounded-lg placeholder:font-semibold border-greyishBrown basis-[48%] placeholder:text-darkGrey"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />

          <Field
            className="p-4 border rounded-lg placeholder:font-semibold border-greyishBrown basis-[48%]"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone"
          />

          <button
            className="py-3 text-white rounded-lg px-9 bg-primary"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
