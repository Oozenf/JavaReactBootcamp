import { Button, Container, Stack, TextField } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import AuthService from "../../services/AuthService";
import { showSnackbar } from "../../store/actions/settingActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const authService = new AuthService();
  const navigate = useNavigate();
  const authDispatch = useDispatch();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      userName: "",
      password: "",
      firstName: "",
      lastName:""
    },
    onSubmit: async (values) => {
      console.log(values);
      // authDispatch(register(values));
      authService.register(values).then((resp) => {
        if (resp !== 401) {
          console.log(resp);
          localStorage.setItem("userId", resp.userId);
          localStorage.setItem("firstName", resp.firstName);
          localStorage.setItem("lastName", resp.lastName);
          localStorage.setItem("refreshToken", resp.refreshToken);
          localStorage.setItem("accessToken", resp.accessToken);
          authDispatch(
            showSnackbar({
              message: "Log succeced.",
              severity: "success",
            })
          );
          navigate("/auth/login");
        } else {
          authDispatch(
            showSnackbar({
              message: "Log is failed.",
              severity: "error",
            })
          );
        }
      });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Container sx={{ mt: 3 }} maxWidth='xs'>
        <Stack spacing={3}>
        <TextField
            name='firstName'
            required
            label='First Name'
            variant='outlined'
            onChange={handleChange}
            value={values.firstName}
          ></TextField>
          <TextField
            name='lastName'
            required
            label='Last Name'
            variant='outlined'
            onChange={handleChange}
            value={values.lastName}
          ></TextField>
          <TextField
            name='userName'
            required
            label='User Name'
            variant='outlined'
            onChange={handleChange}
            value={values.userName}
          ></TextField>
          <TextField
            name='password'
            type='password'
            required
            label='Password'
            variant='outlined'
            onChange={handleChange}
            value={values.password}
          ></TextField>
          <Button variant='contained' type='submit'>
            Submit
          </Button>
        </Stack>
      </Container>
      {JSON.stringify(values)}
    </form>
  );
}
