import AuthService from "../../services/AuthService";

export const LOGIN = "LOGIN";
export const REGISTER = "REGISTER"

const authService = new AuthService();

export function logIn(body) {
  return function (dispatch) {
    authService
      .login(body)
      .then((resp) => resp)
      .then((resp) => dispatch({ type: LOGIN, payload: resp }));
  };
}

export function register(body){
  return function (dispatch) {
    authService
    .register(body)
    .then((resp) => resp)
    .then((resp) => dispatch({ type: REGISTER, payload: resp }));
  }
}

