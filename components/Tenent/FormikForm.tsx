"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  companyname: "",
  address: "",
  country: "",
};

const onSubmit = (values, onSubmitProps) => {
  console.log("Form data", values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please Enter your Email"),
  phone: Yup.string().required("Required"),
  companyname: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});

const FormikForm = ({ isSubmitting }: any) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="flex flex-wrap justify-between gap-4">
        <div className="form-control p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]">
          <Field
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First name"
          />
          <ErrorMessage className="error" name="firstname" component="div" />
        </div>

        <div className="form-control p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]">
          <Field
            type="text"
            id="companyname"
            name="companyname"
            placeholder="Company name"
          />
          <ErrorMessage className="error" name="companyname" component="div" />
        </div>

        <div className="form-control p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]">
          <Field
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last name"
          />
          <ErrorMessage className="error" name="lastname" component="div" />
        </div>

        <div className="form-control p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]">
          <Field
            type="text"
            id="address"
            name="address"
            placeholder="Address"
          />
          <ErrorMessage className="error" name="address" component="div" />
        </div>

        <div className="form-control p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]">
          <Field type="email" id="email" name="email" placeholder="Email" />
          <ErrorMessage className="error" name="email" component="div" />
        </div>

        <div className="form-control p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]">
          <Field
            type="text"
            id="country"
            name="country"
            placeholder="country"
          />
          <ErrorMessage className="error" name="country" component="div" />
        </div>

        <div className="form-control p-4 border border-solid border-greyishBrown rounded-[8px] h-[60px]">
          <Field type="tel" id="phone" name="phone" placeholder="Phone no." />
          <ErrorMessage className="error" name="phone" component="div" />
        </div>

        {/* <button type="reset">Reset data</button>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button> */}
      </Form>
    </Formik>
  );
};

export default FormikForm;

// return (
//     <div>
//       <Formik
//         initialValues={{
//           firstname: "",
//           lastname: "",
//           email: "",
//           phone: "",
//           companyname: "",
//           address: "",
//           country: "",
//         }}
//         validate={(values) => {
//           const errors = {};
//             if (!values.firstname) {
//               errors.firstname = 'Required';
//             } else if (!values.lastname) {
//                 errors.firstname = 'Required';
//             } else if (!values.email) {
//               errors.email = 'Required';
//             } else if (
//               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//             ) {
//               errors.email = 'Invalid email address';
//             }
//           return errors;
//         }}
//         onSubmit={(values, { setSubmitting }) => {
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             setSubmitting(false);
//           }, 400);
//         }}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Field type="text" name="firstname" />
//             <ErrorMessage name="firstname" component="div" />

//             <Field type="text" name="lastname" />
//             <ErrorMessage name="lastname" component="div" />

//             <Field type="email" name="email" />
//             <ErrorMessage name="email" component="div" />

//             <Field type="tel" name="phone" />
//             <ErrorMessage name="email" component="div" />

//             <Field type="text" name="companyname" />
//             <ErrorMessage name="companyname" component="div" />

//             <Field type="text" name="address" />
//             <ErrorMessage name="address" component="div" />

//             <Field type="text" name="country" />
//             <ErrorMessage name="country" component="div" />

//             <button type="submit" disabled={isSubmitting}>
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
