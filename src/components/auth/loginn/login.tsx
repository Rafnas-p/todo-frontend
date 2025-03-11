import { Alert, Snackbar } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup"; 

const validationSchema = Yup.object({
  name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Login() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-80 shadow-lg p-6 rounded-lg">
        <h1 className="text-red-500 font-bold text-lg mb-4">Login</h1>

        <Formik
          initialValues={{ name: "", password: "" }}
          validationSchema={validationSchema} // ✅ Applied validation
          onSubmit={(values, { resetForm }) => {
            console.log("Form Submitted:", values);
            setOpen(true);
            resetForm();
          }}
        >
          {({ touched, errors }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm text-gray-700 font-bold">
                  Name
                </label>
                <Field
                  type="text" 
                  name="name"
                  placeholder="Enter your name"
                  className={`w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    touched.name && errors.name ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm text-gray-700 font-bold">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className={`w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${
                    touched.password && errors.password ? "border-red-500" : ""
                  }`}
                />
                <ErrorMessage name="password" component="p" className="text-red-500 text-xs mt-1" />
              </div>

              <button type="submit" className="bg-red-600 text-white py-2 rounded-lg w-full">
                Login
              </button>
            </Form>
          )}
        </Formik>

        {/* Snackbar Notification */}
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={() => setOpen(false)} severity="success" variant="filled">
            Form Submitted Successfully!
          </Alert>
        </Snackbar>

        {/* Signup Link */}
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/register" className="text-red-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
