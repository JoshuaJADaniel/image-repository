import axios from "axios";

const USER_BACKEND = "https://joshuajadaniel.com/image-repository/api";
const GOOGLE_ENDPOINT = `${USER_BACKEND}/google/auth.php`;
const VALID_ENDPOINT = `${USER_BACKEND}/user/validate.php`;
const SIGNUP_ENDPOINT = `${USER_BACKEND}/user/signup.php`;
const LOGIN_ENDPOINT = `${USER_BACKEND}/user/login.php`;

const getLoggedIn = (callback, jwt) => {
  const form = new FormData();
  form.append("jwt", jwt || localStorage.getItem("jwt"));
  axios.post(VALID_ENDPOINT, form).then((res) => {
    callback(res.data["valid"]);
  });
};

const attemptLogin = (callback, username, password) => {
  const form = new FormData();
  form.append("username", username);
  form.append("password", password);
  axios.post(LOGIN_ENDPOINT, form).then((res) => {
    callback(res.data);
  });
};

const attemptSignup = (callback, username, password) => {
  const form = new FormData();
  form.append("username", username);
  form.append("password", password);
  axios.post(SIGNUP_ENDPOINT, form).then((res) => {
    callback(res.data);
  });
};

const getGoogleUrl = () => GOOGLE_ENDPOINT;

export { getLoggedIn, attemptLogin, attemptSignup, getGoogleUrl };
