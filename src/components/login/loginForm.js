import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import FormError from "react-bootstrap/Form";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";


const schema = yup.object().shape({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

    async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

      try {
        const response = await axios.post(
          "https://polar-wave-85604.herokuapp.com/auth/local",
          {
            identifier: data.username,
            password: data.password,
          }
        );
        //console.log("response", response.data);
        setAuth(response.data);
        localStorage.setItem("Token", response.data.jwt);
        history.push("/adminPage");

      } catch (error) {
        console.log("error", error);

        setLoginError(error.toString());
      } finally {
        setSubmitting(false);
      }
    }

  return (
    <>
      <Container className="loginform">
        <Form onSubmit={handleSubmit(onSubmit)}>
          {loginError && <FormError>{loginError}</FormError>}
          <fieldset disabled={submitting}>
            <div>
              <Form.Control
                className="loginform-input"
                name="username"
                placeholder="Username"
                ref={register}
              />
              {errors.username && (
                <FormError>{errors.username.message}</FormError>
              )}
            </div>
            <div>
              <Form.Control
                className="loginform-input"
                name="password"
                placeholder="Password"
                ref={register}
                type="password"
              />
              {errors.password && (
                <FormError>{errors.password.message}</FormError>
              )}
            </div>
            <button className="loginform-btn btn">{submitting ? "Logging in." : "Login"}</button>
          </fieldset>
        </Form>
      </Container>
    </>
  );
}
