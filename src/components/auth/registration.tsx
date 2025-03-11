import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import registrationSchema from "../../schema/registrationSchema";
import { Snackbar, Alert } from "@mui/material"; // Import MUI Snackbar

function Registration() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white w-80 p-6 shadow-lg items-center rounded-lg">
        <h1 className="text-3xl text-red-900 items-center mb-4">Create Account</h1>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={registrationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form Submitted:", values);
            setOpen(true); 
            resetForm(); 
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="mb-4">
                <label className="block mb-2 text-gray-700 font-bold text-sm">Full Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  className={`w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    touched.name && errors.name ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1" />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-gray-700 font-bold text-sm">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    touched.email && errors.email ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1" />
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-gray-700 font-bold text-sm">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`border w-full rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    touched.password && errors.password ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage name="password" component="p" className="text-red-500 text-xs mt-1" />
              </div>

              <button type="submit" className="bg-red-600 text-white py-2 rounded-lg w-full">
                Register
              </button>
            </Form>
          )}
        </Formik>

        {/* MUI Snackbar for Success Message */}
        <Snackbar
          open={open}
          autoHideDuration={3000} // Hide after 3 seconds
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }} // Position
        >
          <Alert onClose={() => setOpen(false)} severity="success" variant="filled">
            Form Submitted Successfully!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
}

export default Registration;
