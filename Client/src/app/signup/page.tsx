"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid2,
  TextField,
  Typography,
} from "@mui/material";
import { ISignup } from "../interface/ISignup";
import * as Yup from "yup";
import { useFormik } from "formik";
const initialValues: ISignup = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("Firstname is required!"),
  lastName: Yup.string().required("Lastname is required!"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required!"),
  password: Yup.string()
    .min(6, "Password must be atleast 6 characters!")
    .required("Password is required!"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Password does not match!")
    .required("Confirm password is required!"),
});

const signUp = () => {
  // Formik hook for handling form state
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        console.log(values); // Log the form values to the console
      },
    });

  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid2
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        <Card
          sx={{
            padding: "30px 20px",
            width: 500,
            borderRadius: "15px",
            boxShadow:
              "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
          }}
        >
          <CardContent>
            <Typography
              variant="h3"
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                textAlign: "center",
                textTransform: "uppercase",
                // padding: "20px 0px 20px 0px",
              }}
            >
              Sign up
            </Typography>
          </CardContent>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                label="FirstName"
                variant="outlined"
                fullWidth
                type="text"
                name="firstName"
                placeholder="Enter your firstname"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="LastName"
                variant="outlined"
                fullWidth
                type="text"
                name="lastName"
                placeholder="Enter your lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
            </Box>
            <Box mb={2}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                name="email"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                name="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>
            <Box mb={3}>
              <TextField
                label="Confirm Password"
                variant="outlined"
                fullWidth
                type="password"
                name="confirmpassword"
                placeholder="Enter your confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  touched.confirmpassword && Boolean(errors.confirmpassword)
                }
                helperText={touched.confirmpassword && errors.confirmpassword}
              />
            </Box>
            <Button variant="contained" color="primary" fullWidth type="submit">
              Sign Up
            </Button>
          </form>
          <CardContent
            sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "center" }}
          >
            Already have an account?
            <a href="/signin" className="link-primary fw-semibold">
              {" "}
              Sign in
            </a>{" "}
            here
          </CardContent>
        </Card>
      </Grid2>
    </Container>
  );
};

export default signUp;
