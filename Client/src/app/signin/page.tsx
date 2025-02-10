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

import { ISignin } from "../interface/ISignin";
import * as Yup from "yup";
import { useFormik } from "formik";

// InitialValues
const initialValues: ISignin = {
  email: "",
  password: "",
};
// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required!"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters!")
    .required("Password is required!"),
});

const signIn = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, action) => {
        // dispatch: signInRequest(values);
        action.resetForm();
      },
    });
  // console.log(errors);

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
              Sign in
            </Typography>
          </CardContent>

          <form autoComplete="off" onSubmit={handleSubmit}>
            <Box mb={2}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                name="email"
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
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
            </Box>

            <Button variant="contained" color="primary" fullWidth type="submit">
              Sign In
            </Button>
          </form>
          <CardContent
            sx={{ fontSize: "12px", fontWeight: "bold", textAlign: "center" }}
          >
            Don't have an account?{" "}
            <a href="/signup" className="link-primary fw-semibold">
              {" "}
              Sign up
            </a>{" "}
            here
          </CardContent>
        </Card>
      </Grid2>
    </Container>
  );
};

export default signIn;
