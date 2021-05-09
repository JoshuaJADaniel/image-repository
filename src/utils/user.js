import axios from "axios";

const USER_BACKEND = "https://joshuajadaniel.com/image-repository/api/user";
const GOOGLE_BACKEND = "https://joshuajadaniel.com/image-repository/api/google";

const GOOGLE_ENDPOINT = `${GOOGLE_BACKEND}/auth.php`;

const LOGIN_ENDPOINT = `${USER_BACKEND}/login.php`;
const SIGNUP_ENDPOINT = `${USER_BACKEND}/signup.php`;
const VALIDATE_ENDPOINT = `${USER_BACKEND}/validate.php`;

const getLoggedIn = (callback, jwt) => {
  const form = new FormData();
  form.append("jwt", jwt || localStorage.getItem("jwt"));
  axios.post(VALIDATE_ENDPOINT, form).then((res) => {
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
